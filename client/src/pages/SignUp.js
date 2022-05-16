import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "10rem"
    },
    paper: {
        width: '30rem',
        height: "23rem",
        margin: "4rem",
        padding: '2rem'
    },
    typo: {
        fontFamily: 'Montserrat',
        fontSize: '3.25rem',
        opacity: "0.65"

    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: '1.15rem',
        opacity: "0.75",
        padding: "1rem"
    },
    btn: {
        background: '#161616',
        color: "#FFF",
        "&:hover": {
            background: "#161616"
        },
        width: "15rem"
    },
}))
export default function SignUp (props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.root} justifyContent='center'>
                <Paper align='center' className={classes.paper} elevation={3}>
                    <Typography align='center' className={classes.typo}>
                        Customer
                        Signup
                    </Typography>
                    <Typography align='justify' className={classes.text}>
                        If you are looking for some top notch products to buy online , you are in the best place.
                        Just one click away from registering as our official user.
                    </Typography>
                    <Button href='/customer-signup' style={{
                        marginTop: "1.25rem"
                    }} variant='contained' className={classes.btn}>Sign up</Button>
                </Paper>
                <Paper align='center' className={classes.paper} elevation={3}>
                    <Typography align='center' className={classes.typo}>
                        Organization
                        Signup
                    </Typography>
                    <Typography align='justify' className={classes.text}>
                        Want to sell your products online? You can be one of our wholesaler or can be a simple product supplier.What are you waiting for.
                        Click the button below to be one of our suppliers.
                    </Typography>
                    <Button href='/organization-signup' className={classes.btn} variant='contained' >Join now</Button>
                </Paper>
            </Grid>
        </div>
    )
}
