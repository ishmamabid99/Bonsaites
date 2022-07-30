import React, { useContext, useState } from 'react'
import { createTheme } from '@material-ui/core/styles';
import { Button, Grid, makeStyles, Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { registerUser } from '../functions/postData';
import AuthApi from '../contexts/AuthApi';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import CustomerImage from '../images/bank.svg'
import BankImage from '../images/bank.jpg'
import NavProps from '../components/NavProps';
import { useHistory } from 'react-router-dom';
import { SwlCredentialsError, SwlSubmitErrorFrom } from '../functions/Swal';
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        background: '#eae8e9',
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        opacity: "0.8",
        paddingBottom: "30rem"

    },
    typo: {
        fontFamily: 'Montserrat',
        fontSize: '4rem',
        opacity: "0.65"

    },
    divider: {
        width: "10%",
        height: "0.25rem",
        background: "black",
        opacity: "0.65",
        margin: "1rem"
    },
    customerDiv: {

        marginTop: "4rem"
    },
    text: {
        width: "20rem",
        marginBottom: '1.15rem',
        color: "#161616"
    },
    formDiv: {
        marginTop: "6rem"
    },
    btn: {
        background: '#161616',
        color: "#FFF",
        "&:hover": {
            background: "#161616"
        },
        width: "16rem",
        marginTop: "2rem"
    },
    helper: {
        marginTop: "0.75rem"
    },
    sidePaper: {
        backgroundImage: `url(${BankImage})`,
        backgroundSize: "cover",
        height: "48rem",
        width: "45rem",
        padding: "2rem"
    },
    typoNew: {
        fontFamily: 'Lemon',
        fontSize: '2rem',
        color: '#3E3636',
    },
    LoginPaper: {
        padding: "2rem"
    },
    grid: {
        paddingTop: "7rem"
    },
    form: {
        marginTop: "3rem",
        width: "28rem"
    }
}))
export default function Bank(props) {
    const history = useHistory();
    const classes = useStyles()
    const auth = useContext(AuthApi)
    const nav = useContext(NavProps);
    const theme = createTheme({
        palette: {
            primary: {
                main: '#000',
            },

            secondary: {
                main: '#f44336',
            },
        },
    });
    const [data, setData] = useState(null);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async () => {

    }
    return (

        <Paper className={classes.root} elevation={0}>
            <div>
                <Grid justifyContent='center' container className={classes.grid}>
                    <Paper square={true} className={classes.sidePaper} elevation={0}>
                    </Paper>
                    <Paper square={true} className={classes.LoginPaper} elevation={0}>

                        <>

                            <Typography align='center' className={classes.typoNew}>
                                Please fill up
                            </Typography>
                            <Typography align='center' className={classes.typoNew}>
                                your bank details
                            </Typography>
                            <Typography align='center' className={classes.typoNew}>
                                to proceed
                            </Typography>
                            <div className={classes.form} align='center' onChange={handleChange}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        id='card_number'
                                        color='primary'
                                        type='text'
                                        label='Card Number'
                                        className={classes.text}
                                        helperText="Your Card Number"
                                    />
                                    <TextField
                                        id='name_on_card'
                                        color='primary'
                                        type='tel'
                                        label='Name On Card'
                                        className={classes.text}
                                        helperText="Your Name On Card"
                                    />
                                    <TextField
                                        id='exp_mm'
                                        color='primary'
                                        type='month'
                                        className={classes.text}
                                        helperText="Expiration MM / YY"
                                    />
                                    <TextField
                                        id='cvv'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Card Verification Code On Card"
                                    />
                                    <TextField
                                        id='secret'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Provide a secret for security"
                                    />
                                    <TextField
                                        id='confirm_secret'
                                        color='primary'
                                        type='password'
                                        className={classes.text}
                                        helperText="Re-type the secret key"
                                    />
                                </ThemeProvider >
                                <div>
                                    <Button onClick={() => {
                                        if (data && data.name && data.email && data.password === data.confirm && data.phone) {
                                            handleSubmit()
                                                ;
                                        }
                                        else {
                                            SwlSubmitErrorFrom();
                                        }
                                    }} className={classes.btn} variant='contained' >Confirm</Button>
                                </div>
                            </div>
                        </>

                    </Paper>

                </Grid>
            </div>
        </Paper>
    )
}
