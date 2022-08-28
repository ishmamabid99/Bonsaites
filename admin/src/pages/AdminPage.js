import { Avatar, Button, createTheme, Grid, makeStyles, Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import AdminApi from '../contexts/AdminApi';
import NavProps from '../contexts/NavProps';
import { adminLogin } from '../functions/postData';
import { SwlLoginError } from '../functions/Swal';
import Admin from '../images/Admin.svg'
import myadminPage from '../images/adminPage.svg'
const useStyles = makeStyles((theme) => ({
    txtfield: {
        width: "22rem",
        height: "2.5rem",
        marginBottom: "2.5rem"
    },
    root: {
        marginTop: "3rem",
    },
    typo: {
        marginTop: "8rem",
        marginBottom: "0rem",
        fontFamily: 'Laila',
        fontSize: '3rem',
        opacity: "0.7",
        fontWeight: "600"
    },
    avt: {
        height: "15rem",
        width: '15rem',
        marginBottom: "3rem"
    },
    btn: {
        color: 'white',
        margin: '0.75rem',
        width: "22rem",

    },
    admin: {
        height: "70rem",
        width: "80rem",
        backgroundImage: `url(${myadminPage})`,
        backgroundRepeat: "no-repeat",
        backgrounSize: "cover",
        marginTop: "7rem",
        marginLeft: "15rem"
    }
}))
export default function AdminPage(props) {
    const nav = useContext(NavProps);
    const [data, setData] = useState({})
    const loginState = useContext(AdminApi)
    console.log(loginState)
    nav.setNav("ADMIN");
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: green[900],
            },

            secondary: {
                main: '#F2F2F2',
            },
        },
        fontFamily: 'Overpass'
    });
    useEffect(() => {
        try {
            const val = Cookies.get('admin-access');
            console.log(val)
            if (val) {
                const date = new Date();
                const token = jwtDecode(val);
                if (token.exp * 1000 > date.getTime()) {

                    loginState.setAdmin(true)

                }
                else {
                    loginState.setAdmin(false)
                }
            }
            else {
                loginState.setAdmin(false)
            }
        }
        catch (err) {
            console.log(err)
        }
    }, [])
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }
    const handleSubmit = async () => {
        try {
            if (data.adminEmail && data.adminPass) {
                const ret = await adminLogin(data);
                if (ret) {
                    Cookies.set('admin-access', ret)
                    loginState.setAdmin(true)
                    window.location.href = '/dashboard'
                }
                else {
                    loginState.setAdmin(false)
                    SwlLoginError();
                }
            }
            else {
                SwlLoginError()
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    if (loginState.isAdmin) {
        return (
            <Redirect to='/dashboard' replace />
        )
    }
    else {
        return (
            <Grid container justifyContent='flex-start'>
                <Paper className={classes.admin} elevation={0}></Paper>
                <Paper elevation={0}>
                    <ThemeProvider theme={theme}>
                        <Typography align='center' className={classes.typo}>ADMIN LOGIN</Typography>
                        <div align='center' className={classes.root}>
                            <Avatar src={Admin} className={classes.avt} />
                            <div style={{
                                width: "25rem"
                            }}>
                                <TextField id='adminEmail' onChange={handleChange} variant='outlined' type='email' className={classes.txtfield} label='Email' placeholder='Admin Email' />
                                <TextField id='adminPass' onChange={handleChange} variant='outlined' type='password' className={classes.txtfield} label='Password' placeholder='Admin Password' />
                                <Button onClick={handleSubmit} variant='contained' color='primary' className={classes.btn}>Login</Button>
                            </div>
                        </div>
                    </ThemeProvider>
                </Paper>
            </Grid>
        )
    }
}
