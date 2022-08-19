import { CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'
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
        color: "red"

    },
}))
export default function ProgressBar() {
    const classes = useStyles()
    return (
        <div>
            <CircularProgress className={classes.progressBar} />
        </div>
    )
}
