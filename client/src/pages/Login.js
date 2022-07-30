import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { createTheme } from '@material-ui/core/styles';
import { Link, Button, Divider, FormGroup, FormHelperText, Grid, makeStyles, TextField, ThemeProvider, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
import AuthApi from '../contexts/AuthApi';
import { loginUser } from '../functions/postData';
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom';
import BankApi from '../contexts/BankApi';
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
    },
    check: {
        fontSize: '0.85rem',
        color: "red"
    }
}))
export default function Login(props) {
    const classes = useStyles()
    const history = useHistory();
    const auth = useContext(AuthApi)
    const bank = useContext(BankApi)
    const [data, setData] = useState(null);
    const [check, setCheck] = useState(false)
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
    const handleLogin = async () => {
        console.log(data)
        if (data.email && data.password) {
            console.log(data)
            console.log(check)
            data.user_role = check;
            if (!check) {
                data.user_role = "REGULAR"
            }
            else {
                data.user_role = "ORG"
            }
            const res = await loginUser(data);
            const token = res.data.token;
            const val = jwt_decode(token);
            const date = new Date();
            console.log(val)
            if (val.exp * 1000 > date.getTime()) {
                Cookies.set('x-access', token);
                auth.setLogin(true);
                console.log(data.user_bank);
                bank.setBank(data.user_bank)
                history.push('/')

            }
            else {
                auth.setLogin(false)
            }
        }
        else {
            console.log("Invalid credentials")
        }
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleCheck = () => {
        if (check === false) setCheck(true);
        if (check === true) setCheck(false);
    }
    return (
        <div>

            <Grid className={classes.root} container justifyContent='space-evenly'>
                <div className={classes.customerDiv}>
                    <Typography className={classes.typo}>
                        CUSTOMER
                    </Typography>
                    <Typography className={classes.typo}>
                        LOGIN
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
                            <Button onClick={handleLogin} className={classes.btn} variant='contained' >Login</Button>
                            <FormControlLabel
                                control={<Checkbox value={check} checked={check} onChange={handleCheck} id='role' />}
                                label={<Typography
                                    className={classes.check}
                                >Are you a product supplier?</Typography>}
                            />
                            <FormHelperText className={classes.helper} >
                                <Link href='/signup' color='primary'>Don't have an account? Singup instead</Link>
                            </FormHelperText>
                        </ThemeProvider >
                    </FormGroup>
                </div>
            </Grid>

        </div>
    )
}
