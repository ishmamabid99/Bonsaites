import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Typography, } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie';
import AdminApi from '../contexts/AdminApi';
import NavProps from '../contexts/NavProps';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
    },
    rainbow: {
        fontFamily: "Laila",
        fontSize: "2.5rem",
        fontWeight: "600",
        width: "20rem",
        color: "#1b5e20",
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
    }
}));

export default function Navbar() {
    const history = useHistory();
    const nav = useContext(NavProps)
    const auth = useContext(AdminApi)
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
    return (
        <div className={classes.root}>
            <AppBar className={classes.nav} position="static">

                {nav.nav === "ADMIN" ?
                    <Toolbar>
                        <div className={classes.div1}>
                            <div style={{ width: "auto" }}>
                                <NavLink to='/' >
                                    <div className={classes.rainbow}>
                                        BonsaiTes Admin
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </Toolbar>
                    :
                    null

                }
                {nav.nav === "ADMINLOGGED" ?

                    <Toolbar>
                        <div className={classes.div1}>
                            <div style={{ width: "auto" }}>
                                <NavLink to='/' >
                                    <div className={classes.rainbow}>
                                        BonsaiTes Admin
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div align='right' className={classes.div2}>

                            <Button onClick={() => {
                                Cookies.remove('admin-access');
                                window.location.href = '/'
                            }} className={classes.typo}>
                                <Typography className={classes.btn}>Logout</Typography>
                            </Button>
                        </div>
                    </Toolbar>
                    :
                    null
                }

            </AppBar>
        </div >
    );
}
