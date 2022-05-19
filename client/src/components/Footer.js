import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import wave from '../images/wave.png'
const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${wave})`,
        background: "no-repeat",
        backgroundSize: "100% 100%",
        width: "auto",
        height: "20rem",
        border: "0",
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
            </Paper>
        </div>
    )
}
