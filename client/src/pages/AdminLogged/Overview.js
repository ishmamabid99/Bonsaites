import { Grid, Icon, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountBox';
import CategoryIcon from '@material-ui/icons/Category';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BarChartIcon from '@material-ui/icons/BarChart';
import { getNoUsers } from '../../functions/getData';
const useStyles = makeStyles(theme => ({
    paper1: {
        width: "20rem",
        height: "20rem",
        backgroundColor: "#D61C4E",
        margin: "1rem"
    },
    paper2: {
        width: "20rem",
        height: "20rem",
        background: "#224B0C",
        margin: "1rem"
    },
    paper3: {
        width: "20rem",
        height: "20rem",
        background: "#1CD6CE",
        margin: "1rem"
    },
    paper4: {
        width: "20rem",
        height: "20rem",
        background: "#FEDB39",
        margin: "1rem"
    },
    icons: {
        color: "white",
        fontSize: "7rem",
        margin: "2rem 0rem  0rem 2rem"
    },
    typo1: {
        fontFamily: "Ubuntu",
        color: 'white',
        fontSize: "2rem",
        fontWeight: "600",
        marginLeft: "2.5rem"
    },
    typo2: {
        fontFamily: "Overpass",
        fontSize: "3.5rem",
        color: 'white',
        margin: "2.5rem"
    }
}))
export default function Overview() {
    const classes = useStyles();
    const [data, setData] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const ret = await getNoUsers();
                console.log(ret)
                setData({ ...data, ret })
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();

    }, [])
    return (
        <Grid container justifyContent="space-evenly">
            <Paper align='left' elevate={4} className={classes.paper1}>
                <AccountCircleIcon className={classes.icons} />
                <Typography className={classes.typo1}>Users</Typography>
                <Typography className={classes.typo2}>{data.users}</Typography>
            </Paper>
            <Paper elevate={4} className={classes.paper2}>
                <CategoryIcon className={classes.icons} />
                <Typography className={classes.typo1}>Products</Typography>
                <Typography className={classes.typo2}>{data.products}</Typography>
            </Paper>
            <Paper elevate={4} className={classes.paper3}>
                <BarChartIcon className={classes.icons} />
                <Typography className={classes.typo1}>Suppliers</Typography>
                <Typography className={classes.typo2}>{data.suppliers}</Typography>
            </Paper>
            <Paper elevate={4} className={classes.paper4}>
                <MonetizationOnIcon className={classes.icons} />
                <Typography className={classes.typo1}>Transactions</Typography>
                <Typography className={classes.typo2}>$300,150</Typography>
            </Paper>
        </Grid>
    )
}
