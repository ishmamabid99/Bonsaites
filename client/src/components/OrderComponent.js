import { Avatar, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        margin: "7rem 10rem 5rem 10rem"
    },
    paper: {
        width: "130rem",
        height: "20rem"
    },
    div1: {
        padding: '2rem',
    },
    avt: {
        width: "16rem",
        height: "16rem"
    },
    div2: {
        marginTop: "2rem",
        marginLeft: "1rem"
    },
    div3: {
        marginTop: "2rem"
    },
    typo1: {
        marginLeft: "1rem",
        fontFamily: "overpass",
        fontSize: "1.5rem"
    },
    typo3: {
        marginLeft: "1rem",
        fontFamily: "overpass",
        fontSize: "1.5rem",
        fontWeight: "600",
        opacity: "0.9"
    },
    div4: {
        marginLeft: "10%"
    },
    div5: {
        marginTop: "8rem"
    },
    typo2: {
        marginLeft: "1rem",
        fontFamily: "overpass",
        fontSize: "2rem",
        fontWeight: "600",
        opacity: "0.7"
    },
    div6: {
        marginTop: "2rem",
        marginLeft: "1rem"
    }
}))
export default function OrderComponent(props) {
    const classes = useStyles();
    console.log(props.data)
    return (
        <div className={classes.root}>
            {props.data.map((ele, index) =>
                <Paper className={classes.paper} elevation={0}>
                    <div className={classes.div1}>
                        <Grid container justifyContent='flex-start'>

                            <Avatar variant='square' className={classes.avt} src={`/uploads/${ele.img}`} />
                            <div className={classes.div2}>
                                <div>
                                    <span className={classes.typo1}>
                                        Product Id:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.prod_id}
                                    </span>
                                </div>
                                <div className={classes.div3}>
                                    <span className={classes.typo1}>
                                        Transaction Id:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.t_id}
                                    </span>
                                </div>
                                <div className={classes.div3}>
                                    <span className={classes.typo1}>
                                        Quantity:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.order}
                                    </span>
                                </div>
                                <div className={classes.div3}>
                                    <span className={classes.typo1}>
                                        Product Name:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.name}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.div4}>
                                <div className={classes.div5}>
                                    <span className={classes.typo2}>
                                        Amount Recieved:
                                    </span>
                                    <span className={classes.typo2}>
                                        {parseInt(ele.amount * 0.85)}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.div4}>
                                <div className={classes.div5}>
                                    <span className={classes.typo3}>
                                        Payment Option:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.payment}
                                    </span>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Paper>
            )}
        </div>
    )
}
