import { Avatar, Button, ButtonGroup, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteProduct, updateProduct } from '../../functions/postData';
const useStyles = makeStyles(theme => ({
    paper: {
        height: "24rem",
        width: '30rem'
    },
    root: {
        marginTop: "7rem"
    },
    typoCard: {
        fontFamily: "Laila",
        fontWeight: "800",
        fontSize: "1.15rem",
        marginTop: "0.75rem"
    },
    typoPrice: {
        fontFamily: "Overpass",
        fontSize: "0.9rem",
        marginTop: "0.65rem",
        fontSize: "1rem"
    },
    bgm: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    btnGrp: {
        width: '30rem'
    },
    btn: {
        width: '15rem',
        boxShadow: "0",
        borderRadius: "0"
    },
    btn2: {
        width: '15rem',
        background: 'white',
        boxShadow: "0",
        borderRadius: "0"
    }

}))
export default function AdminCardComponent(props) {
    console.log(props.data)
    const classes = useStyles()
    const handleAccept = async (id) => {
        try {
            console.log(id)
            const result = updateProduct(id)
            if (result) {
                try {
                    props.forceUpdate();
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleReject = async (id) => {
        try {
            const result = deleteProduct(id);
            if (result) {
                try {
                    props.setFetch(!!props.fetch)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Grid container justifyContent='center'>
                {props.data.map((order, index) => (
                    <>
                        <Paper className={classes.paper} elevation={0} key={index}>
                            <Link to={`/product/${order._id}`}> <Paper square={true} style={{
                                backgroundImage: `url(${`/uploads/${order.img}`})`,
                                backgroundSize: "cover",
                                height: '19rem',
                            }}
                                className={classes.bgm}
                                elevation={0}>
                            </Paper>
                            </Link>
                            <Typography align='center' className={classes.typoCard}>
                                {order.name}
                            </Typography>
                            <Typography align='center' className={classes.typoPrice}>
                                ৳{order.price}.00
                            </Typography>
                            <ButtonGroup className={classes.btnGrp}>
                                <Button onClick={() => {
                                    handleAccept(order._id)
                                }} variant='contained' disableElevation color='primary' className={classes.btn}>Accept</Button>
                                <Button onClick={() => {
                                    handleReject(order._id)
                                }} variant='contained' disableElevation className={classes.btn2}>
                                    <Typography color='primary'>Reject</Typography>
                                </Button>
                            </ButtonGroup>
                        </Paper>
                    </>
                ))}

            </Grid>
        </div>

    )
}
