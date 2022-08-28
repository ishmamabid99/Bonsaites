import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import BankAuth from '../contexts/BankAuth';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
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
        fontSize: "2.5rem",
        fontWeight: "600",
        width: "20rem",
        color: "#2d296f",
        marginLeft: "2rem"
    },
    nav: {
        height: "auto",
        background: '#fff',
        zIndex: theme.zIndex.drawer + 1,
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
    anotherPaper: {
        background: "transparent",
        width: "35rem",
        height: "50rem",
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
    const classes = useStyles();
    const auth = useContext(BankAuth)
    const theme = createTheme({
        palette: {
            primary: {
                main: green[50]
            },
            secondary: {
                main: "#2d296f"
            }
        }
    })
    return (
        <div className={classes.root}>
            <AppBar className={classes.nav} position="static">
                <ThemeProvider theme={theme}>
                    <Toolbar>
                        <div className={classes.div1}>
                            <div style={{ width: "auto" }}>
                                <NavLink to='/' >
                                    <div className={classes.rainbow}>
                                        BANK
                                    </div>

                                </NavLink>
                            </div>
                        </div>
                        {auth.auth ?
                            <div align='right' className={classes.div2}>

                                <Button onClick={() => {
                                    auth.setAuth(false)
                                }} className={classes.typo}>
                                    <Typography className={classes.btn}>Logout</Typography>
                                </Button>
                            </div>
                            :
                            null

                        }
                    </Toolbar>
                </ThemeProvider>
            </AppBar>
        </div >
    );
}
