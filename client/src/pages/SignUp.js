import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'
import SignupImage from '../images/SignupImage.jpg'
import Greenpaper from '../images/Greenpaper.jpg'
const useStyles = makeStyles(() => ({
    paper: {
        width: '30rem',
        height: "23rem",
        margin: "7rem  0rem 0rem 3rem",
        padding: '2rem',
        background: "transparent",
        backgroundSize: "cover",
    },
    typo: {
        fontFamily: 'Lemon',
        fontSize: '3rem',
        color: "#004d40"
    },
    text: {
        fontFamily: 'Laila',
        fontSize: '1.25rem',
        fontWeight: "400",
        padding: "1rem",
        color: '#004d40'
    },
    btn: {
        color: '#004d40',
        background: "#FFF",
        "&:hover": {
            background: "#fff",
            color: "#004d40"
        },
        width: "15rem"
    },
    div: {
        backgroundImage: `url(${SignupImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "auto"
    },
    typoMe: {
        marginTop: "0.475rem",
        fontFamily: "Overpass",
        fontWeight: "600",
        fontSize: "1.5rem"
    }
}))
export default function SignUp(props) {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Grid container className={classes.root} justifyContent='center'>
                <Paper align='center' className={classes.paper} elevation={0}>
                    <Typography align='center' className={classes.typo}>
                        Customer
                        Signup
                    </Typography>
                    <Typography align='justify' className={classes.text}>
                        If you are looking for some top notch products to buy online , you are in the best place.
                        Just one click away from registering as our official user.
                    </Typography>
                    <Button href='/customer-signup' style={{
                        marginTop: "1.95rem"
                    }} className={classes.btn}>
                        <Typography className={classes.typoMe}>
                            Sign Up Now
                        </Typography>

                    </Button>
                </Paper>
                <Paper align='center' className={classes.paper} elevation={0}>
                    <Typography align='center' className={classes.typo}>
                        Organization
                        Signup
                    </Typography>
                    <Typography align='justify' className={classes.text}>
                        Want to sell your products online? You can be one of our wholesaler or can be a simple product supplier.What are you waiting for.
                        Click the button below to be one of our suppliers.
                    </Typography>
                    <Button  href='/organization-signup' className={classes.btn} >
                        <Typography className={classes.typoMe}>
                            Join Us Now
                        </Typography>
                    </Button>
                </Paper>
            </Grid>
        </div>
    )
}
