import { Avatar, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { deliverOrder } from '../functions/postData';
import { SwlSuccess } from '../functions/Swal';
const useStyles = makeStyles(theme => ({
    root: {
        display: "center",
        margin: "7rem 10rem 5rem 10rem"
    },
    paper: {
        width: "65rem",
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
        marginLeft: "5%"
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
export default function SupplyComponent(props) {
    const classes = useStyles();
    console.log(props.data)
    const handleDeliver = async (id, amount, o_id) => {
        const res = await deliverOrder({ id, amount, o_id });
        if (res) {
            props.setCount_(props.count_ + 1)
            SwlSuccess();
        }
    }
    return (
        <div className={classes.root}>
            {props.data.map((ele, index) =>
                <Paper className={classes.paper} variant='outlined' elevation={1}>
                    <div className={classes.div1}>
                        <Grid container justifyContent='flex-start'>

                            <Avatar variant='square' className={classes.avt} src={`/uploads/${ele.img}`} />
                            <div align='left' className={classes.div2}>
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
                                        Name:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.name}
                                    </span>
                                </div>
                                <div className={classes.div3}>
                                    <span className={classes.typo1}>
                                        Quantity:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.amount}
                                    </span>
                                </div>
                                <div className={classes.div3}>
                                    <span className={classes.typo1}>
                                        Product Type:
                                    </span>
                                    <span className={classes.typo1}>
                                        {ele.type}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.div4}>
                                <div className={classes.div5}>
                                    <Button onClick={() => {
                                        handleDeliver(ele.prod_id, ele.amount, ele._id)
                                    }} className={classes.btn} color='secondary' variant='contained' size="large">
                                        Confirm Supply
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </div>
                </Paper>
            )}
        </div>
    )
}