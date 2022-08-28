import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/CardComponent';
import ProgressBar from '../../components/ProgressBar';
import { getProductData } from '../../functions/getData';
const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: "laila",
        opacity: "0.7",
        fontSize: "2.5rem",
        marginLeft: "7rem",
        fontWeight: "600"
    }
}))
export default function Export() {
    const [exportData, setExportData] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await getProductData();
                if (res) {
                    setExportData(res)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [])
    return (
        <>
            {exportData === [] || exportData === undefined ?
                <ProgressBar />
                :
                <>
                    <Typography className={classes.title}>
                        Export Product
                    </Typography>
                    <CardComponent obj={exportData} state="EXPORT" />
                </>
            }
        </>
    )
}
