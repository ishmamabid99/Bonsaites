import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import { Paper, Button, ButtonGroup, Divider, IconButton, Modal, Typography, TextField, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { ThemeProvider, createTheme } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink, useHistory } from 'react-router-dom'
import NavProps from './NavProps';
import ShopImage from '../images/LoginImage.jpg'
import PostModal from '../images/PostModal.jpg'
import jwt_decode from 'jwt-decode';
import { loginUser } from '../functions/postData';
import Cookies from 'js-cookie';
import AuthApi from '../contexts/AuthApi';
import FormFile from '../pages/FormFile';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {

        fontFamily: "Laila",
        color: "green",
        margin: "0rem 1rem 0 1rem",
        fontSize: "2rem",
    },
    rainbow: {
        fontFamily: "Laila",
        fontSize: "1.75rem",
        width: "9rem",
        background: "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);  -webkit-background-clip: text",
        color: "transparent"
    },
    nav: {
        height: "auto"
        , background: '#fff'
    },
    div1: {
        flexGrow: 2
    },
    div2: {

        flexGrow: 1
    },
    icons: {
        fontSize: '2rem'
    },
    btn: {
        fontFamily: "Laila",
        color: "black",
        margin: "0rem 1rem 0 1rem"
    },
    typo: {
        background: "white",
        "&:hover": {
            background: 'white'
        }
    },
    modal: {
        width: "29rem",
        height: "48rem",
        backgroundImage: `url(${ShopImage})`,
        backgroundSize: "cover",

    },
    postModal: {

        background: "transparent",

        width: "30rem",
        height: "48rem",
        backgroundImage: `url(${PostModal})`,
        backgroundSize: "cover",
    },
    anotherPaper: {
        background: "transparent",
        width: "35rem",
        height: "48rem",
        background: "#F1F0EC"
    },
    myModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formTypo: {
        fontFamily: "Lemon",
        color: '#3E3636',
        fontSize: "3rem",
        marginBottom: "4rem"

    },
    textFeild: {
        width: "20rem",
        marginTop: '2rem'
    },
    loginBtn: {
        background: "#004d40",
        color: "#FFF",
        "&:hover": {
            background: "#004d40",
            color: "#FFF"
        },
        width: "7rem",
        marginTop: "2rem"
    },
    loginTypo: {
        fontWeight: "800"
    }
}));

export default function Navbar() {
    const history = useHistory();
    const [data, setData] = useState(null);
    const nav = useContext(NavProps)
    const auth = useContext(AuthApi)
    const [check, setCheck] = useState(false)
    const [modal, setModal] = useState(false);
    const [postModal, setPostModal] = useState(false)
    const classes = useStyles();
    console.log(auth)
    const theme = createTheme({
        palette: {
            primary: {
                main: green[50]
            },
            secondary: {
                main: green[900]
            }
        }
    })
    const handleCheck = () => {
        if (check === false) setCheck(true);
        if (check === true) setCheck(false);
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async () => {
        console.log(data)
        if (data.email && data.password) {
            console.log(data)
            console.log(check)
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
                setModal(false);
                console.log(val.user_role)
                auth.setLogin(true);
                nav.setNav(val.user_role);
                history.push('/');
            }
            else {
                auth.setLogin(false)
            }
        }
        else {
            console.log("Invalid credentials")
        }
    }
    console.log(nav)
    return (
        <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
                <Toolbar>
                    <div className={classes.div1}>
                        <div style={{ width: "auto" }}>
                            <NavLink to='/' >
                                <div className={classes.rainbow}>
                                    EShoppers
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    {nav.nav === "REGULAR" ?
                        <div align='right' className={classes.div2}>
                            <ThemeProvider theme={theme}>
                                <IconButton color='secondary' >
                                    <SearchIcon className={classes.icons} />
                                </IconButton>
                                <NavLink to='cart'>
                                    <IconButton color='secondary'>
                                        <ShoppingCartIcon className={classes.icons} />
                                    </IconButton>
                                </NavLink>
                                <NavLink to='profile'>
                                    <IconButton color='secondary'>
                                        <AccountCircleIcon className={classes.icons} />
                                    </IconButton>
                                </NavLink>
                                <NavLink to='wishlist'>
                                    <IconButton color='secondary'>
                                        <FavoriteIcon className={classes.icons} />
                                    </IconButton>
                                </NavLink>
                            </ThemeProvider>
                        </div>
                        :
                        <></>
                    }
                    {nav.nav === "ORG" ?

                        <ThemeProvider theme={theme}>
                            <Modal open={postModal}
                                onClose={() => setPostModal(false)}
                                className={classes.myModal}
                            >
                                <Paper align='center' elevation={3} style={{ width: '65rem', height: "48rem" }}>
                                    <Grid container justifyContent='space-around'>
                                        <Paper className={classes.postModal} elevation={0} >
                                        </Paper>
                                        <Paper className={classes.anotherPaper}>
                                            <ThemeProvider theme={theme}>
                                                <FormFile />
                                            </ThemeProvider>
                                        </Paper>
                                    </Grid>

                                </Paper>
                            </Modal>
                            <div align='right' className={classes.div2}>
                                <ThemeProvider theme={theme}>
                                    <ButtonGroup variant='text'>
                                        <Button onClick={() => { setPostModal(true) }} className={classes.typo}>
                                            <Typography className={classes.btn}>ADD PRODUCT</Typography>
                                        </Button>
                                        <NavLink to='/add-product'>
                                            <Button className={classes.typo}>
                                                <Typography className={classes.btn}>MY PRODUCTS</Typography>
                                            </Button>
                                        </NavLink>'

                                        <Button className={classes.typo}>
                                            <Typography className={classes.btn}>Logout</Typography>
                                        </Button>

                                    </ButtonGroup>
                                </ThemeProvider>
                            </div>
                        </ThemeProvider>
                        :
                        <></>
                    }
                    {nav.nav === "LANDING" ?

                        <>
                            <Modal
                                className={classes.myModal}
                                open={modal}
                                onClose={() => { setModal(false) }}
                            >
                                <Paper align='center' elevation={3}>
                                    <Grid container justifyContent='space-around'>
                                        <Paper className={classes.modal} elevation={0} >
                                        </Paper>
                                        <Paper className={classes.anotherPaper}>
                                            <ThemeProvider theme={theme}>
                                                <div onChange={(e) => handleChange(e)} align='center' style={{ marginTop: "10rem" }} elevation={0}>
                                                    <Typography className={classes.formTypo}>
                                                        Good to see you
                                                    </Typography>
                                                    <div style={{ marginTop: "4rem" }}>
                                                        <TextField variant='standard' color='secondary' className={classes.textFeild} id='email' label='Email' type='email' placeholder='Enter your email please' />
                                                        <TextField variant='standard' color='secondary' className={classes.textFeild} id='password' label='Password' type='password' placeholder='Enter your email please' />
                                                    </div>
                                                    <div align='center' style={{ marginTop: '1.5rem' }}>
                                                        <FormControlLabel
                                                            control={<Checkbox value={check} checked={check} onChange={handleCheck} id='role' />}
                                                            label={<Typography
                                                                className={classes.check}
                                                            >Are you a product supplier?</Typography>}
                                                        />
                                                    </div>
                                                    <Button onClick={handleSubmit} className={classes.loginBtn} size='large'>
                                                        <Typography className={classes.loginTypo} >Login</Typography>
                                                    </Button>
                                                </div>
                                            </ThemeProvider>
                                        </Paper>
                                    </Grid>

                                </Paper>
                            </Modal>
                            <div align='right' className={classes.div2}>
                                <ThemeProvider theme={theme}>
                                    <ButtonGroup variant='text'>
                                        <Button onClick={() => { setModal(true) }} className={classes.typo}>
                                            <Typography className={classes.btn}>Login</Typography>
                                        </Button>

                                        <Button href='/signup' className={classes.typo}>
                                            <Typography className={classes.btn}>signup</Typography>
                                        </Button>
                                    </ButtonGroup>
                                </ThemeProvider>
                            </div>
                        </>
                        :
                        <></>
                    }
                </Toolbar>
            </AppBar>
        </div >
    );
}
