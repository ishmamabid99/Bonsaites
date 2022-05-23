import React, { useContext, useState } from 'react'
import { createTheme } from '@material-ui/core/styles';
import { Button, Divider, FormGroup, FormHelperText, Grid, Link, makeStyles, Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { registerUser } from '../functions/postData';
import AuthApi from '../contexts/AuthApi';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import CustomerImage from '../images/CustomerImage.jpg'
import NavProps from '../components/NavProps';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        background: '#eae8e9',
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        opacity: "0.8"

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
        backgroundImage: `url(${CustomerImage})`,
        backgroundSize: "cover",
        height: "35rem",
        width: "30rem",
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
export default function CustomerSignup() {
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
        if (!data) {
            console.log(data)
            console.log('Invalid Credentials')
        }
        else {
            const res = await registerUser(data)
            const token = res.data.token;
            const val = jwt_decode(token);
            const date = new Date();
            if (val.exp * 1000 > date.getTime()) {
                Cookies.set('x-access', token);
                auth.setLogin(true);
                console.log(val.user_role)
                nav.setNav(val.user_role);
                history.push('/')

            }
            else {
                auth.setLogin(false)
            }
        }
    }
    return (
        <Paper className={classes.root} elevation={0}>
            <div>
                <Grid justifyContent='center' container className={classes.grid}>
                    <Paper square={true} className={classes.LoginPaper} elevation={0}>
                        <Typography align='center' className={classes.typoNew}>
                            Do you know we offer
                        </Typography>
                        <Typography align='center' className={classes.typoNew}>
                            Special vouchers to
                        </Typography>
                        <Typography align='center' className={classes.typoNew}>
                            our new users?
                        </Typography>
                        <div className={classes.form} align='center' onChange={handleChange}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    id='name'
                                    color='primary'
                                    type='text'
                                    label='Full Name'
                                    className={classes.text}
                                    placeholder="Your Name"
                                />
                                <TextField
                                    id='phone'
                                    color='primary'
                                    type='tel'
                                    label='Phone'
                                    className={classes.text}
                                    placeholder="Your Phone Number"
                                />
                                <TextField
                                    id='email'
                                    color='primary'
                                    type='email'
                                    label='Email'
                                    className={classes.text}
                                    placeholder="Your Email Address"
                                />
                                <TextField
                                    id='password'
                                    color='primary'
                                    type='password'
                                    label='Password'
                                    className={classes.text}
                                    placeholder="Your Password"
                                />
                                <TextField
                                    id='confirm'
                                    color='primary'
                                    type='password'
                                    label='Confirm'
                                    className={classes.text}
                                    placeholder="Confrim Password"
                                />
                            </ThemeProvider >
                            <div>
                                <Button onClick={handleSubmit} className={classes.btn} variant='contained' >Signup</Button>
                            </div>
                        </div>

                    </Paper>
                    <Paper square={true} className={classes.sidePaper} elevation={0}>
                    </Paper>
                </Grid>
            </div>
        </Paper>
    )
}
