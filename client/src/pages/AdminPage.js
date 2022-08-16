import { Avatar, Button, createTheme, makeStyles, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react'
import NavProps from '../components/NavProps'
import { adminEmail, adminPass } from '../env/env';
import { adminLogin } from '../functions/postData';
import { SwlCredentialsError, SwlLoginError } from '../functions/Swal';
import Admin from '../images/Admin.svg'
import AdminDashboard from './AdminLogged/AdminDashboard';
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
        fontFamily: 'Lemon',
        fontSize: '3rem',
        opacity: "0.7"
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
}))
export default function AdminPage(props) {
    const nav = useContext(NavProps);
    const [data, setData] = useState({})
    const [loginState, setLoginState] = useState(false);

    nav.setNav("ADMIN");
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: green[900],
            },

            secondary: {
                main: '#f44336',
            },
        },
        fontFamily: 'Overpass'
    });
    useEffect(() => {
        const val = Cookies.get('admin-access');
        console.log(val)
        if (val) {
            const date = new Date();
            const token = jwtDecode(val);
            if (token.exp * 1000 > date.getTime()) {

                setLoginState(true);

            }
            else {
                setLoginState(false)
            }
        }
        else {
            setLoginState(false)
        }
    }, [])
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    }
    const handleSubmit = async () => {
        if (data.adminEmail && data.adminPass) {
            const ret = await adminLogin(data);
            if (ret) {
                Cookies.set('admin-access', ret)
                setLoginState(true);
            }
            else {
                setLoginState(false);
                SwlLoginError();
            }
        }
        else {
            SwlLoginError()
        }
    }

    return (

        <ThemeProvider theme={theme}>
            {loginState ?
                <>
                    <AdminDashboard />
                </>
                :
                <>
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
                </>
            }

        </ThemeProvider>
    )
}
