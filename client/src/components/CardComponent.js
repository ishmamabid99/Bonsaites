import { ButtonGroup, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Greenpaper from '../images/CardImage.jpg'
const useStyles = makeStyles(theme => ({
    paper: {
        height: "24rem",
        width: '24rem'
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
export default function CardComponent() {
    const classes = useStyles()
    const data = {
        id: '12193masaisdaidq32323e9932e23',
        img: Greenpaper,
        name: 'Bd Boys',
        price: '100',
        desc: "Doremi intermio"
    }
    let obj = [];
    for (var i = 0; i < 20; i++) {
        obj[i] = data;
    }
    console.log(obj)
    return (
        <div>
            <Grid container justifyContent='center'>
                {obj.map((order, index) => (
                    <Paper className={classes.paper} elevation={0} key={index}>
                        <Link to={`/product/:${order.id}`}> <Paper square={true} style={{
                            backgroundImage: `url(${order.img})`,
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
                    </Paper>
                ))}

            </Grid>
        </div>

    )
}
