import { Avatar, makeStyles, Paper, Typography, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import img from "../images/banklogged.svg"
import face from "../images/faceBank.jpg"
const useStyles = makeStyles(theme => ({
    div: {
        marginTop: "10rem"
    },
    paper: {
        height: "5rem",
        width: "80rem",
        marginBottom: "2rem"
    },

    paper2: {
        height: "25rem",
        width: " 100%",
        marginBottom: "3rem",
        backgroundRepeat: "no-repeat",
    },
    paper3: {
        height: "20rem",
        width: "60rem",
        marginBottom: "3rem",
        marginTop: "3rem",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    },
    root: {
        paddingBottom: "12rem",
        background: "#2d296f",
    },

    typo: {
        fontFamily: "Overpass",
        fontSize: "3rem",
        marginLeft: "8rem",
        fontWeight: "600",
        opacity: "0.8",
        color: "white"
    },
    typo1: {
        fontFamily: "Laila",
        fontSize: "2rem",
        color: "black",
        opacity: "1",
        marginTop: "1.15rem",
        marginLeft: "15rem",
        width: "15rem"
    },
    typo2: {
        fontFamily: "Laila",
        fontSize: "2rem",
        color: "black",
        opacity: "1",
        marginTop: "1.15rem",
        marginLeft: "20rem"
    },
    avt: {
        width: "15rem",
        height: "15rem",
        marginTop: "-15rem",
        marginRight: "2rem"
    },
    style: {
        marginTop: "1.15rem",
        marginLeft: "15rem"
    }


}))
export default function AfterLogged(props) {
    console.log(props)
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div style={{ marginBottom: "5rem" }}>
                <Paper elevation={0} className={classes.paper2} align="center">
                    <Paper className={classes.paper3} elevation={0} />
                </Paper>
            </div>
            <Typography className={classes.typo}>Welcome to your account</Typography>
            <div align='right'>
                <Avatar src={face} className={classes.avt} />
            </div>
            <div className={classes.div} align="center">
                <Paper varaint="outlined" className={classes.paper}>
                    <Grid container justifyContent='flex-start'>
                        <span className={classes.typo1}>Card Number</span>
                        <span className={classes.typo2}>{props.cardData.account_no}</span>
                    </Grid>
                </Paper>
                <Paper varaint="outlined" className={classes.paper}>
                    <Grid container justifyContent='flex-start'>
                        <span className={classes.typo1}>Expiration</span>
                        <span className={classes.typo2}>{props.cardData.MMYY}</span>
                    </Grid>
                </Paper>
                <Paper varaint="outlined" className={classes.paper}>
                    <Grid container justifyContent='flex-start'>
                        <span className={classes.typo1}>Balance</span>
                        <span className={classes.typo2}>{props.cardData.balance}</span>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}
