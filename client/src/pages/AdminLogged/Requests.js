import React, { useEffect, useState } from 'react'
import { getRequests } from '../../functions/getData'
import { CircularProgress, makeStyles } from '@material-ui/core'
import AdminCardComponent from './AdminCardComponent';
const useStyles = makeStyles(theme => ({
    progressBar: {
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        color: 'red'
    },
}))
export default function Requests() {
    const classes = useStyles();
    const [fetch, setFetch] = useState(false)
    const [reqData, setReqData] = useState(undefined)
    useEffect(() => {
        const getData = async () => {
            const ret = await getRequests();
            console.log(ret)
            setReqData(ret);
        }
        getData();
    }, [fetch])
    return (
        <div>
            {reqData === undefined ?
                <>
                    <CircularProgress className={classes.progressBar} />
                </>
                :
                <>
                    <AdminCardComponent data={reqData} setFetch={setFetch} />
                </>
            }
        </div>
    )
}
