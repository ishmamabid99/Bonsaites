import React, { useContext, useEffect, useState } from 'react'
import NavProps from '../components/NavProps'
import ShopImage from '../images/NewImage.jpg'
import { Paper, makeStyles, Typography, Button, Modal, Box } from '@material-ui/core'
import Footer from '../components/Footer'
import CardComponent from '../components/CardComponent'
import { getProductData } from '../functions/getData'
const useStyles = makeStyles(theme => ({
    paper: {
        backgroundImage: `url(${ShopImage})`,
        background: "no-repeat",
        backgroundSize: "cover",
        width: "auto",
        height: "63rem",
        border: "0",
        paddingTop: "7rem"
    },
    typo: {
        fontFamily: "Overpass",
        fontSize: "4.5rem",
        color: "white",
        fontWeight: "800",
        marginLeft: "-1.25rem"
    },
    div: {
        background: "transparent",
        width: "100%",
        height: "70rem",
        "&:hover": {
            background: "black",
            opacity: "0.8"
        },
        marginTop: "-7rem"
    },
    writeDiv: {
        padding: "10rem  0rem  0rem 5rem"
    },
    btn: {
        marginTop: "3rem",
        color: "black",
        background: "white",
        "&:hover": {
            background: 'white',
        }
        ,
        width: "8rem"
    },
    btnTypo: {
        fontFamily: "Overpass",
        fontSize: "1rem",
        color: "black",
        fontWeight: "800",
        paddingTop: "0.35rem"
    },
    divX: {
        marginBottom: "7rem"
    }
}))

export default function Landing() {
    const classes = useStyles();
    const nav = useContext(NavProps);
    const [prodData, setProdData] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getProductData();
                if (data) {
                    setProdData(data);
                }
                else {
                    setProdData([])
                }

            }
            catch (err) {
                console.log(err)
            }
        }
        try {
            getData();
        }
        catch (err) {
            console.log(err)
        }
    }, [])
    return (

        <>
            <Paper align='center' square={true} className={classes.paper}>
                <div className={classes.div}>
                    <div align='left' className={classes.writeDiv}>
                        <Typography className={classes.typo}>
                            Have You Seen
                        </Typography>
                        <Typography className={classes.typo}>
                            Our Big Friday
                        </Typography>

                        <Typography className={classes.typo}>
                            Deals Yet?
                        </Typography>
                        <Button className={classes.btn}>
                            <Typography className={classes.btnTypo}>
                                Shop Now
                            </Typography>
                        </Button>
                    </div>
                </div>
            </Paper>
            <div className={classes.divX}>
                {prodData === undefined || prodData.length === 0 ?
                    <></>
                    :

                    <CardComponent obj={prodData} />
                }
            </div>
            <Footer />
        </>
    )
}
