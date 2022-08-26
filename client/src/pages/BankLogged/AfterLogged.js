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
        height: "17rem",
        width: " 150rem",
        marginBottom: "3rem",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "none",


    },
    root: {
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
            <div>
                <Paper elevation={0} className={classes.paper2} align="right">
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
