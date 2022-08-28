import { Avatar, Button, createTheme, makeStyles, TextField, ThemeProvider, Typography, Paper, Grid } from "@material-ui/core";
import React, { useState } from "react";
import AfterLogged from "./AfterLogged";
import mid from "../images/mid.png"
import side from "../images/bankside.svg"
import { useContext } from "react";
import BankAuth from "../contexts/BankAuth";
import { getCardInfo } from "../functions/postData";
import { SwlNoAccountError } from "../functions/Swal";


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
        opacity: "0.7",
        fontWeight: "600"
    },
    avt: {
        height: "8rem",
        width: '8rem',
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
        backgroundImage: `url(${side})`,
        backgroundRepeat: "no-repeat",
        backgrounSize: "cover",
        marginTop: "7rem",
        marginLeft: "15rem"
    }
}))
export default function HelloBank() {
    const classes = useStyles();
    const auth = useContext(BankAuth)
    const [cardData, setCardData] = useState(undefined)
    const [bankData, setBankData] = useState(undefined)
    const handleSubmit = async () => {
        try {
            const res = await getCardInfo(bankData)
            if (res) {
                setCardData(res);
                auth.setAuth(true)
            }
            else {
                SwlNoAccountError();
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setBankData({ ...bankData, [e.target.id]: e.target.value });
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#2d296f",
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
                {auth.auth ?
                    <>
                        {cardData !== undefined ?
                            <AfterLogged cardData={cardData} />
                            :
                            null
                        }
                    </>
                    :
                    <>
                        <Grid container justifyContent='flex-start'>
                            <Paper className={classes.admin} elevation={0}></Paper>
                            <Paper elevation={0}>
                                <ThemeProvider theme={theme}>
                                    <Typography align='center' className={classes.typo}>BANK LOGIN</Typography>
                                    <div align='center' className={classes.root}>
                                        <Avatar src={mid} className={classes.avt} />
                                        <div style={{
                                            width: "25rem"
                                        }}>
                                            <TextField id='account_no' onChange={handleChange} variant='outlined' type='email' className={classes.txtfield} label='Account No' placeholder='Your account no' />
                                            <TextField id='CVV' onChange={handleChange} variant='outlined' type='password' className={classes.txtfield} label='CVV' placeholder='Your Cvv' />
                                            <Button onClick={handleSubmit} variant='contained' color='primary' className={classes.btn}>Login</Button>
                                        </div>
                                    </div>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                    </>
                }
            </ThemeProvider>
        </div >)
}