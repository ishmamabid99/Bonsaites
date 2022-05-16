import React, { useContext, useState } from 'react'
import { createTheme } from '@material-ui/core/styles';
import { Button, Divider, FormGroup, FormHelperText, Grid, Link, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { registerOrg } from '../functions/postData';
import AuthApi from '../contexts/AuthApi';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(30)
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
        marginBottom: '0.75rem',
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
        }
    },
    helper: {
        marginTop: "0.75rem"
    }
}))
export default function OrganizationSignup() {
    const classes = useStyles()
    const auth = useContext(AuthApi)
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
            const res = await registerOrg(data)
            const token = res.data.token;
            const val = jwt_decode(token);
            const date = new Date();
            if (val.exp * 1000 > date.getTime()) {
                Cookies.set('x-access', token);
                auth.setLogin(true);
            }
            else {
                auth.setLogin(false)
            }
        }
    }
    return (
        <div>

            <Grid className={classes.root} container justifyContent='space-evenly'>
                <div className={classes.customerDiv}>
                    <Typography className={classes.typo}>
                        ORGANIZATION
                    </Typography>
                    <Typography className={classes.typo}>
                        SIGNUP
                    </Typography>
                    <Typography className={classes.typo}></Typography>

                    <div align='left'>
                        <Divider className={classes.divider} />
                    </div>
                </div>
                <div className={classes.formDiv}>
                    <FormGroup onChange={handleChange}>
                        <ThemeProvider theme={theme}>
                            <TextField
                                id='name'
                                color='primary'
                                variant='outlined'
                                type='text'
                                label='Full Name'
                                className={classes.text}
                            />
                            <TextField
                                id='phone'
                                color='primary'
                                variant='outlined'
                                type='tel'
                                label='Phone'
                                className={classes.text}
                            />
                            <TextField
                                id='email'
                                color='primary'
                                variant='outlined'
                                type='email'
                                label='Email'
                                className={classes.text}
                            />
                            <TextField
                                id='password'
                                color='primary'
                                variant='outlined'
                                type='password'
                                label='Password'
                                className={classes.text}
                            />
                            <TextField
                                id='confirm'
                                color='primary'
                                variant='outlined'
                                type='password'
                                label='Confirm'
                                className={classes.text}
                            />
                            <Button onClick={handleSubmit} className={classes.btn} variant='contained' >Signup</Button>
                            <FormHelperText className={classes.helper}>
                                <Link href='/login' color='primary'>Already have an account? Login instead</Link>
                            </FormHelperText>
                        </ThemeProvider >
                    </FormGroup>
                </div>
            </Grid>

        </div>
    )
}
