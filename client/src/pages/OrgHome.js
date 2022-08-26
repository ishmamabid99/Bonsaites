import { makeStyles, Typography } from '@material-ui/core'
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react'
import NavProps from '../components/NavProps'
import OrderComponent from '../components/OrderComponent';
import ProgressBar from '../components/ProgressBar';
import { getMyOrder, getTransactions } from '../functions/getData';
const useStyles = makeStyles(theme => ({
    root: {
        background: 'none',
    },
    typo: {
        marginTop: "7rem",
        fontFamily: "lemon",
        fontSize: "3rem"
    }
}))

export default function OrgHome(props) {
    const classes = useStyles();
    const nav = useContext(NavProps)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const getData = async () => {
            let arr = []
            try {
                const data = await getMyOrder();
                setOrders(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getData()
    }, [])
    return (
        <div className={classes.root}>
            {orders === [] || orders === undefined
                ?
                <ProgressBar />
                :
                <>
                    <Typography align='center' className={classes.typo}>
                        Order History
                    </Typography>
                    <OrderComponent data={orders} />
                    <OrderComponent data={orders} />
                    <OrderComponent data={orders} />
                    <OrderComponent data={orders} />
                    <OrderComponent data={orders} />
                    <OrderComponent data={orders} />
                </>

            }
        </div>
    )
}
