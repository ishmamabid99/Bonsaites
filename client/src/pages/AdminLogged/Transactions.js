import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import TableComponents from '../../components/TableComponents';
import { getTransactions } from '../../functions/getData';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'center'
    },
    title: {
        fontFamily: "laila",
        opacity: "0.7",
        fontSize: "2.5rem",
        marginLeft: "7rem",
        fontWeight: "600"
    },
    titleTable: {
        fontFamily: 'overpass',
        fontSize: "2rem"
    },
    div2: {
        marginLeft: '0rem',
        marginTop: "7rem"
    },
    table: {
        width: "95rem"
    },
    cell: {
        fontFamily: "overpass"
    }
}))
export default function Transactions() {
    const classes = useStyles();
    const [tabData, setTabData] = useState([]);
    const [count, setCount] = useState(0)
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getTransactions();
                console.log(data);
                setTabData(data);
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();

    }, [count])

    return (
        <div className={classes.root}>
            <Typography className={classes.title} align='left'>
                Transactions
            </Typography>
            <TableComponents tabData={tabData} setCount={setCount} count={count} />
        </div>
    )
}
