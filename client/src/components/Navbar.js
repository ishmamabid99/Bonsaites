import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar, Button, IconButton } from '@material-ui/core';
import logo from '../uBuy.png'
import { green } from '@material-ui/core/colors';
import { ThemeProvider, createTheme } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom'
import NavProps from './NavProps';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    logo: {
        marginLeft: -40,
        width: 230,
        height: 80
    },
    nav: {
        height: "auto"
        , background: '#161616'
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
        width: "7rem",
        marginLeft: "1rem"
    }
}));

export default function Navbar() {
    const nav = useContext(NavProps)
    const classes = useStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: green[50]
            }
        }
    })
    console.log(nav);
    return (
        <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
                <Toolbar>
                    <div className={classes.div1}>
                        <div style={{ width: "2rem" }}>
                            <NavLink to='/'>
                                <Avatar className={classes.logo} src={logo} />
                            </NavLink>
                        </div>
                    </div>
                    {nav.nav === "USER" ?

                        <div align='right' className={classes.div2}>
                            <ThemeProvider theme={theme}>
                                <IconButton color='primary' >
                                    <SearchIcon className={classes.icons} />
                                </IconButton>
                                <NavLink to='cart'>
                                    <IconButton color='primary'>
                                        <ShoppingCartIcon className={classes.icons} />
                                    </IconButton>
                                </NavLink>
                                <NavLink to='profile'>
                                    <IconButton color='primary'>
                                        <AccountCircleIcon className={classes.icons} />
                                    </IconButton>
                                </NavLink>
                                <NavLink to='wishlist'>
                                    <IconButton color='primary'>
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
                            <NavLink to="/add-product" >

                                <IconButton color='primary'>
                                    <AddIcon className={classes.icons} />
                                </IconButton>

                            </NavLink>

                            <IconButton color='primary'>
                                <ExitToAppIcon className={classes.icons} />
                            </IconButton>

                        </ThemeProvider>
                        :
                        <></>
                    }
                    {nav.nav === "LANDING" ?

                        <>
                            <div align='right' className={classes.div2}>
                                <ThemeProvider theme={theme}>

                                    <Button href='/login' className={classes.btn} variant='outlined' color='primary' size='large'>
                                        Login
                                    </Button>


                                    <Button href='/signup' className={classes.btn} variant='outlined' color='primary' size='large'>
                                        signup
                                    </Button>

                                </ThemeProvider>
                            </div>
                        </>
                        :
                        <></>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
