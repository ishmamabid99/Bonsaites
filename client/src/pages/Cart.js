import { Avatar, Button, CssBaseline, Divider, FormControl, Grid, IconButton, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ErrorPage from '../components/ErrorPage';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ClearIcon from '@material-ui/icons/Clear';
import { handleCheckCart } from '../functions/postData';
import { SwlCartType, SwlError, SwlTransactionSuccess } from '../functions/Swal';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "7rem"
    },
    title: {
        marginLeft: "15rem",
        fontFamily: "Lemon",
        fontSize: "3rem",
        opacity: "0.7"
    },
    grid: {
        marginLeft: "15rem",
        width: "86rem",
        display: "inline-block",
        marginTop: "5rem"
    },
    paper1: {
        height: "auto",
        width: "86rem",
        borderRadius: "0"
    },
    paper2: {
        // display: "inline-block",
        height: "50rem",
        width: "30rem",
        background: "#F2F2F2",
        borderRadius: "0",
        marginLeft: "7rem",
        marginRight: "15rem",
        marginTop: "-5rem"
    },
    paper: {
        borderRadius: "0",
        height: "10rem",
        width: "86rem",
        marginLeft: "3rem",
        marginBottom: "0rem",

    },
    div: {
        paddingTop: "1.5rem"
    },
    avt: {
        width: "7rem",
        height: "7rem"
    },
    div2: {
        margin: '1.5rem'
    },
    typo1: {
        fontFamily: "overpass",
        fontSize: "1.25rem",
        opacity: "0.7",
        fontWeight: "600"
    },

    typo2: {
        fontFamily: "overpass",
        fontSize: "1.5rem",
    },
    numPaper: {
        width: "2rem",
        height: "2rem",
        marginTop: "2.25rem",

    },
    div3: {
        display: "flex",
        marginLeft: "20rem"
    },
    icons: {
        fontSize: "2rem"
    },
    custom: {
        "&:hover": {
            background: "none"
        },
    },
    custom2: {
        "&:hover": {
            background: 'none'
        },
        marginLeft: "20rem"
    },
    summary: {
        paddingTop: "2rem",
        fontFamily: "Lemon",
        fontSize: "2.5rem",
        opacity: "0.7",
        paddingBottom: "2rem"
    },
    item: {
        fontFamily: "Overpass",
        fontSize: "1.5rem",
        paddingLeft: '1.5rem'
    },
    item1: {
        fontFamily: "Overpass",
        fontSize: "1.5rem"
    },
    itemCnt: {
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: "1.5rem",
        paddingLeft: '0.5rem'
    },
    formControl: {
        width: "25rem",
        paddingLeft: '1.5rem',
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    textfeild: {
        width: "25rem",
        marginLeft: "1.5rem",
        marginBottom: "5rem",
        background: "#fff"
    },
    div: {
        marginTop: "4rem"
    },
    btn: {
        margin: "2.5rem",
        width: "25rem"
    }
}))
export default function Cart(props) {
    const [cartData, setCartData] = useState([]);
    const classes = useStyles();
    const [count, setCount] = useState(1)
    const [total, setTotal] = useState(0)
    const [item, setItem] = useState(0)
    const [type, setType] = useState("");
    useEffect(() => {
        const getCart = () => {
            try {
                let arr = Cookies.get('cart');
                if (arr == undefined) {
                    setCartData("Nothing to show")
                }
                else {
                    console.log(typeof (arr))
                    arr = JSON.parse(arr)
                    let cnt = 0;
                    let tot = 0;
                    for (var i = 0; i < arr.length; i++) {
                        if (!arr[i].quantity)
                            arr[i].quantity = 1;
                        cnt += arr[i].quantity;
                        tot += (arr[i].quantity * arr[i].price);
                    }
                    if (arr.length === 0) {
                        setCartData("Nothing to show")
                    }
                    else {
                        setCartData(arr);
                        setItem(cnt)
                        setTotal(tot)
                    }
                }

            }
            catch (err) {
                console.log(err)
            }
        }
        getCart();
    }, [count])
    useEffect(() => {

    }, [count])
    const handleChekOut = async () => {
        let owners = []
        cartData.forEach((ele) => {
            console.log(ele)
            owners.push({
                to: ele.owner,
                amount: ele.quantity * ele.price,
                quantity: ele.quantity,
                prod_id: ele._id

            })
        })

        try {
            const sendData = {
                owners,
                type,
            }
            if (type === "") {
                SwlCartType();
            }
            else {
                const res = await handleCheckCart(sendData);
                if (res) {
                    SwlTransactionSuccess();
                    Cookies.remove('cart');
                    setCartData([]);
                    setCount(count + 1)
                }
                else {
                    SwlError();
                }
            }

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            {cartData === [] || cartData === "Nothing to show" ?
                <>
                    <ErrorPage
                        icon={<SentimentVeryDissatisfiedIcon style={{ fontSize: "5rem", color: '#FFB200' }} />}
                        title=""
                        message="There is nothing in cart right now.Please add product to cart."
                    />
                    <CssBaseline />
                </>
                :
                <div align='left' className={classes.root}>

                    <Typography align='left' className={classes.title}>
                        Shopping Cart
                    </Typography>
                    <div style={{ display: "flex" }}>
                        <div className={classes.grid} align='left'>
                            <Paper className={classes.paper1} elevation={0}>
                                {cartData.map((dt, i) => (
                                    <>
                                        <Divider />
                                        <Paper align='left' className={classes.paper} elevation={0}>
                                            <div className={classes.div}>
                                                <Grid container justifyContent='space-between'>
                                                    <Avatar component={Link} to={`/product/${dt._id}`} className={classes.avt} variant='square' src={`/uploads/${dt.img}`} />
                                                    <div className={classes.div2}>
                                                        <Typography className={classes.typo1}>{dt.type}</Typography>
                                                        <Typography className={classes.typo2}>{dt.name}</Typography>
                                                    </div>
                                                    <div className={classes.div3}>
                                                        <IconButton onClick={() => {
                                                            let temp = cartData;
                                                            if (temp[i].quantity > 1) {
                                                                setItem(item - 1);
                                                                let sum = total;
                                                                sum -= parseInt(dt.price);
                                                                setTotal(sum);
                                                                temp[i].quantity -= 1;
                                                                setCount(temp);
                                                                console.log(temp)
                                                                Cookies.set("cart", JSON.stringify(temp))
                                                            }
                                                        }} disableRipple className={classes.custom} >
                                                            <RemoveCircleIcon fontSize='large' />
                                                        </IconButton>

                                                        <Paper className={classes.numPaper} elevation={3}>
                                                            <Typography align='center' className={classes.typo2}>
                                                                {dt.quantity}
                                                            </Typography>
                                                        </Paper>

                                                        <IconButton onClick={() => {
                                                            let temp = cartData;
                                                            if (temp[i].quantity >= 1) {
                                                                setItem(item + 1)
                                                                let sum = total;
                                                                sum += parseInt(dt.price);
                                                                setTotal(sum);
                                                                temp[i].quantity += 1;
                                                                setCount(temp);
                                                                Cookies.set("cart", JSON.stringify(temp))
                                                            }
                                                        }
                                                        } disableRipple className={classes.custom} color="secondary">
                                                            <AddCircleIcon fontSize='large' />
                                                        </IconButton>
                                                        <IconButton onClick={() => {
                                                            let arr = cartData;
                                                            arr.splice(i, 1);
                                                            console.log(arr)
                                                            setItem(item - dt.quantity);
                                                            setTotal(total - (dt.quantity * dt.price))
                                                            Cookies.set('cart', JSON.stringify(arr));
                                                            setCount(count + 1)

                                                        }} disableRipple className={classes.custom2} color="secondary">
                                                            <ClearIcon fontSize='large' />
                                                        </IconButton>
                                                    </div>

                                                </Grid>

                                            </div>
                                        </Paper>
                                        <Divider />
                                    </>
                                ))

                                }
                            </Paper>

                        </div>

                        <div align='right'>
                            <Paper align='left' className={classes.paper2} elevation={0}>
                                <Typography align='center' className={classes.summary}>
                                    Summary
                                </Typography>
                                <Divider style={{ marginBottom: "3rem" }} />
                                <div style={{ marginBottom: "1rem" }}>
                                    <span className={classes.item}>TOTAL ITEMS:</span><span className={classes.itemCnt}>{item}</span>
                                </div>
                                <Typography className={classes.item}>SHIPPING</Typography>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        variant='filled'
                                        native
                                        value={type}
                                        onChange={(e) => {
                                            setType(e.target.value)
                                        }}
                                        inputProps={{
                                            name: 'type',
                                            id: 'age-native-simple',
                                        }}
                                    >
                                        <option value={""} disabled>
                                            <span className={classes.item1}>Type</span>
                                        </option>
                                        <option value={"Payment on delivery"}>
                                            <span className={classes.item1}> Payment on delivery</span>
                                        </option>
                                        <option value={"Payment by card"}>
                                            <span className={classes.item1}>Payement by card</span>
                                        </option>

                                    </Select>
                                </FormControl>
                                <TextField variant='outlined' label='Voucher Code' type='text' className={classes.textfeild} />
                                <Divider />
                                <div className={classes.div}>
                                    <span className={classes.item}>TOTAL PRICE:</span><span className={classes.itemCnt}>৳{total}</span>
                                </div>
                                <Button className={classes.btn} onClick={handleChekOut} variant='contained' color='secondary'>Checkout</Button>
                            </Paper>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
