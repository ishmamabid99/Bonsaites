import { makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'

import ChartShow from './ChartShow'
import { chartColors } from '../../colors'
const useStyles = makeStyles(theme => ({
    Header: {
        fontFamily: "laila",
        opacity: "0.7",
        fontSize: "2.5rem",
        marginLeft: "7rem",
        fontWeight: "600"
    },
    Paper: {
        width: "80%",
        height: "35rem",
        padding: "2rem",
        marginLeft: "10rem",
        marginBottom: "10rem",
        marginTop: "7rem"
    },
    div: {
        padding: "2rem",
        height: "40rem",
        width: "80%"
    },
}))
export default function Analytics() {
    const classes = useStyles();
    const [data, setData] = React.useState({})
    const InitialDatasets = [200, 300, 400, 300, 500, 600];
    const CurrentDatasets = [100, 200, 300, 300, 440, 600]
    const labels = ['a', 'b', 'c', 'd', 'e', 'f']
    const dataX = {
        maintainAspectRatio: false,
        responsive: false,
        labels: labels,
        datasets: [
            {
                label: 'initial',
                data: InitialDatasets,
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors
            },
            {
                label: 'current',
                data: CurrentDatasets,
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors

            }
        ]
    };
    return (
        <div>
            <>
                <Typography className={classes.Header} align='left'>Analytics</Typography>
                <Paper align='center' className={classes.Paper} elevation={2}>
                    <div className={classes.div}>
                        <ChartShow data={dataX} labels={labels} />
                    </div>
                </Paper>
            </>
        </div>
    )
}
