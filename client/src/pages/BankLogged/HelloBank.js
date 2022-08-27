import { Avatar, Button, createTheme, makeStyles, TextField, ThemeProvider, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React, { useContext, useState } from "react";
import NavProps from "../../components/NavProps";
import AfterLogged from "./AfterLogged";
import mid from "../../images/mid.svg"
import side from "../../images/bankside.svg"

const useStyles = makeStyles(theme => ({
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
        fontWeight: "600",
        opacity: "0.7"
    },
    avt: {
        height: "15rem",
        width: '15rem',
        marginBottom: "3rem"
    },

    avt2: {
        height: "40rem",
        backgroundImage: `url(${side})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left 5px top 5px",
        marginTop: "7rem"
    },
    btn: {
        color: 'white',
        margin: '0.75rem',
        width: "22rem",

    },
}))
export default function HelloBank() {
    const classes = useStyles();
    const nav = useContext(NavProps)
    const [auth, setAuth] = useState(false);
    nav.setNav("BANK")

    const [bankData, setBankData] = useState(undefined)
    const handleSubmit = () => {
        //Auth part

        setAuth(true)

    }

    const handleChange = (e) => {
        setBankData({ ...bankData, [e.target.id]: e.target.value });
        console.log(bankData)
    }

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


    return (
        <div>
            <ThemeProvider theme={theme}>
                {auth ?
                    <>
                        <AfterLogged />
                    </>
                    :
                    <>
                        <div elevation={0} className={classes.avt2}>
                            <Typography align='center' className={classes.typo}>BANK LOGIN</Typography>
                            <div align='center' className={classes.root}>
                                <Avatar variant="square" src={mid} className={classes.avt} />
                                <div style={{
                                    width: "25rem"
                                }}>
                                    <TextField id='email' onChange={handleChange} variant='outlined' type='email' className={classes.txtfield} label='Email' placeholder='Admin Email' />
                                    <TextField id='password' onChange={handleChange} variant='outlined' type='password' className={classes.txtfield} label='Password' placeholder='Admin Password' />
                                    <Button onClick={handleSubmit} variant='contained' color='primary' className={classes.btn}>Login</Button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </ThemeProvider>
        </div>)
}