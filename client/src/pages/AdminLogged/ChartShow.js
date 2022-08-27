import React from 'react'
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 0,
        height: "35%",
        width: "80%",
        marginnBottom: '2rem'
    }
}))

export default function ChartShow(props) {
    const classes = useStyles();
    return (
        <div>

            <div className={classes.root}>
                <Bar

                    data={props.data}
                    options={{
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Product sales',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>

    )
}