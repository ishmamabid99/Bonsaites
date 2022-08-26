import { Button, ButtonGroup, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Greenpaper from '../images/CardImage.jpg'
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
    }

}))
export default function CardComponent(props) {
    console.log(props)
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container justifyContent='center'>
                {props.obj.map((order, index) => (
                    <>
                        <Paper className={classes.paper} elevation={0} key={index}>
                            <Link to={props.state === 'wishlist' ? `/product/${order.prod_id}` : `/product/${order._id}`}> <Paper square={true} style={{
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
                            {props.state === "EXPORT" ?
                                <Button variant='contained' color='primary' className={classes.btn}>Order</Button>
                                :
                                null
                            }
                        </Paper>

                    </>
                ))}

            </Grid>
        </div>

    )
}
