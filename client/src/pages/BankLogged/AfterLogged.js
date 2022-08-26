import { Avatar, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import img from "../../images/banklogged.svg"
import face from "../../images/faceBank.jpg"
const useStyles = makeStyles(theme => ({
    div: {
        marginTop: "3rem"
    },
    paper: {
        height: "5rem",
        width: "110rem",
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
        paddingBottom: "5rem",
        background: "#89CFFD"
    },

    typo: {
        fontFamily: "Overpass",
        fontSize: "3rem",
        marginLeft: "4rem",
        fontWeight: "600",
        opacity: "0.8"
    },

    avt: {
        width: "15rem",
        height: "15rem",
        marginTop: "-15rem",
        marginRight: "2rem"
    }


}))
export default function AfterLogged() {
    const classes = useStyles()
    useEffect(() => {
        const getData = async () => {
            try {
                //const data = await getBankData()
            }
            catch (err) {
                console.log(err)
            }
        }
    }, [])
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
                <Paper varaint="outlined" className={classes.paper}></Paper>
                <Paper varaint="outlined" className={classes.paper}></Paper>
                <Paper varaint="outlined" className={classes.paper}></Paper>
                <Paper varaint="outlined" className={classes.paper}></Paper>
            </div>
        </div>
    )
}
