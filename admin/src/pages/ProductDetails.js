import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import { getProductDetails } from '../functions/getData'
import backgroundImage from '../images/detailPage.jpg'
import {

    GlassMagnifier,

} from "react-image-magnifiers";
import { Grid, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        width: "100vw",
        height: "94vh"
    },
    paper: {
        background: "#EEEEEE",
        width: "104rem",
        height: "54rem",
        borderRadius: "0rem"
    },
    paper2: {
        background: "#EEEEEE",
        width: '62rem',
        height: "46.55rem",
        marginTop: "3.725rem",
        marginLeft: "3.725rem",
        borderRadius: "0"
    },
    paper3: {
        background: "#EEEEEE",
        width: '25rem',
        height: "40.55rem",
        borderRadius: "0",
        marginTop: "6rem",
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
    }
    ,
    img: {
        width: "35rem",
        height: "0",
        paddingBottom: "46.55rem",
        top: "3.725rem",
        left: "3.725rem",

    },
    header: {
        fontFamily: "Lemon",
        fontSize: "2.00rem",
        color: "grey"
    },
    detail: {
        marginTop: "3rem",
        fontFamily: "laila",
        lineHeight: "1.5",
        fontSize: "1.35rem"
    },
    priceTypo: {
        fontFamily: "Roboto",
        fontWeight: "800",
        fontSize: "1.5rem",
        opacity: "0.8",
        marginTop: "2.25rem"
    },
    adminDiv: {
        marginTop: "2rem"
    },
    toolbar: {
        background: "transparent",
        width: "104rem",
        height: "5rem",
        borderRadius: "0rem"
    },
    btn: {
        width: "15rem",
        height: "5rem",
        background: "#43a047",
        color: "white",
        "&:hover": {
            background: '#43a047',
            color: "white"
        },
        borderRadius: '0'
    },
    btn1: {
        width: "18rem",
        height: "5rem",
        background: "#F8B400",
        color: "white",
        "&:hover": {
            background: '#F8B400',
            color: "white"
        },
        borderRadius: '0'
    },
    btnGrp: {
        width: "71rem"
    },
    typo1: {
        paddingTop: "1.75rem",
        width: "31rem",
        background: "white"
    },
    typo2: {
        paddingTop: "1.75rem",
        width: "24rem",
        background: "white",
    },
    typo3: {
        width: "16rem",
        height: "5rem",
        background: "#0078AA",
        color: "white",
        "&:hover": {
            background: '#0078AA',
            color: "white"
        },
        borderRadius: '0'
    },
    priceTypo_: {
        fontFamily: "Roboto",
        fontSize: '1.25rem',
        color: 'grey'
    },
    detailTypo_: {
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: '1.25rem',
        color: 'grey'
    },
    icons: {
        color: "#43a047",
    },
    span: {
        marginTop: "5rem"
    }
}))
export default function AdminDetails() {
    const { id } = useParams();
    const classes = useStyles();
    const [detailData, setDetailData] = useState(undefined)
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const getToken = () => {
            try {
                const details = jwtDecode(Cookies.get("admin-access"));
                if (details) {
                    if (details.user_role === "ADMIN")
                        setAdmin(true);
                }
                else {
                    setAdmin(false)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        const getData = async () => {
            console.log(id)
            const data = await getProductDetails(id);
            console.log(data)
            setDetailData(data)
        }

        getToken();
        getData();


    }, [])
    return (
        <div>
            {detailData === undefined ?
                <ProgressBar />
                :
                <div align='center' className={classes.root}>
                    <Toolbar />
                    <Paper align='left' elevation={3} className={classes.paper}>
                        <Grid container justifyContent='flex-start'>
                            <GlassMagnifier
                                imageSrc={`/uploads/${detailData.img}`}
                                imageAlt="product"
                                className={classes.img}
                            />
                            <Paper align='center' elevation={0} className={classes.paper2}>
                                <Paper elevation={0} className={classes.paper3}>
                                    <Typography className={classes.header}>
                                        {detailData.name}
                                    </Typography>
                                    <Typography paragraph align='justify' className={classes.detail}>
                                        {detailData.desc}
                                    </Typography>

                                    <Typography align='center' className={classes.priceTypo}>
                                        Price : ৳{detailData.price}
                                    </Typography>
                                    {admin ?
                                        <div align='center' className={classes.adminDiv}>
                                            <div>
                                                <span className={classes.priceTypo}>{detailData.initialSupply} </span> <span className={classes.detail}>pieces were initially supplied.</span>
                                            </div>
                                            <div>
                                                <span className={classes.priceTypo}> {detailData.leftSupply} </span> <span className={classes.detail}>pieces are left in stock.</span>
                                            </div>
                                        </div>
                                        :
                                        null

                                    }

                                </Paper>
                            </Paper>
                        </Grid>
                    </Paper>
                </div>
            }

        </div>
    )
}

// {desc: "Quality product"
// img: "pexels-jessica-lewis-creative-189857.jpg"
// initialSupply: 12
// leftSupply: 12
// name: "New kid dress"
// owner: "62fb9eed4e13de194e37b2b3"
// price: 200
// state: false
// type: "1}