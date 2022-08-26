import { Button, ButtonGroup, Grid, IconButton, makeStyles, Modal, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postOrder } from '../functions/postData';
import { SwlSubmitError, SwlSuccess } from '../functions/Swal';
import orderImg from '../images/order_amount.svg'
const useStyles = makeStyles(theme => ({
    paper: {
        height: "24rem",
        width: '30rem'
    },
    root: {
        marginTop: "7rem"
    },
    typoCard: {
        fontFamily: "Laila",
        fontWeight: "800",
        fontSize: "1.15rem",
        marginTop: "0.75rem"
    },
    typoPrice: {
        fontFamily: "Overpass",
        fontSize: "0.9rem",
        marginTop: "0.65rem",
        fontSize: "1rem"
    },
    bgm: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    btn: {
        width: "25rem"
    },
    anotherPaper: {
        width: "35rem",
        height: "50rem",
        backgroundImage: `url(${orderImg})`,
        backgroundSize: "40rem 50rem",
        backgroundRepeat: "none"
    },
    myModal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    formTypo: {
        fontFamily: "Overpass",
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
        width: "20rem",
        marginTop: "2rem"
    },
    loginTypo: {
        fontWeight: "800"
    },
    newPap: {

    }
}))
export default function CardComponent(props) {
    console.log(props)
    const classes = useStyles()
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState(0)
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSubmit = async (order) => {
        if (amount !== 0) {
            console.log(order)
            try {
                const data = {
                    prod_id: order._id, amount, desc: order.desc, img: order.img,
                    initialSupply: order.initialSupply, leftSupply: order.leftSupply,
                    name: order.name, price: order.price,
                    type: order.type,
                    owner: order.owner
                };
                const ret = await postOrder(data);
                if (ret) {
                    setModal(false);
                    SwlSuccess();
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            SwlSubmitError();
        }
    }
    return (
        <div className={classes.root}>
            <Grid container justifyContent='center'>
                {props.obj.map((order, index) => (
                    <>
                        <Paper className={classes.paper} elevation={0} key={index}>
                            <Link to={props.state === 'wishlist' ? `/product/${order.prod_id}` : `/product/${order._id}`}> <Paper square={true} style={{
                                backgroundImage: `url(${`/uploads/${order.img}`})`,
                                backgroundSize: "cover",
                                height: '19rem',
                            }}
                                className={classes.bgm}
                                elevation={0}>
                            </Paper>
                            </Link>
                            <Typography align='center' className={classes.typoCard}>
                                {order.name}
                            </Typography>
                            <Typography align='center' className={classes.typoPrice}>
                                ৳{order.price}.00
                            </Typography>
                            {props.state === "EXPORT" ?
                                <>
                                    <Modal
                                        className={classes.myModal}
                                        open={modal}
                                        onClose={() => { setModal(false) }}
                                    >

                                        <Paper className={classes.anotherPaper}>
                                            <Paper className={classes.newPap} />
                                            <div onChange={(e) => handleChange(e)} align='center' style={{ marginTop: "5rem" }} elevation={0}>
                                                <Typography className={classes.formTypo}>
                                                    Order Quantity
                                                </Typography>
                                                <div style={{ marginTop: "20rem" }}>
                                                    <TextField variant='outlined' color='primary' className={classes.textFeild} id='amount' label='Amount' type='text' placeholder='Specify the amount' />
                                                </div>
                                                <Button onClick={() => { handleSubmit(order) }} className={classes.loginBtn} size='large'>
                                                    <Typography className={classes.loginTypo} >Proceed</Typography>
                                                </Button>
                                            </div>
                                        </Paper>

                                    </Modal>
                                    <div align='center'>
                                        <Button variant='contained' onClick={() => setModal(true)} color='primary' className={classes.btn}>Order</Button>
                                    </div>
                                </>
                                :
                                null
                            }
                        </Paper>

                    </>
                ))}

            </Grid>
        </div>

    )
}
