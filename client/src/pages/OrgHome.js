import { makeStyles, Typography } from '@material-ui/core'
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
        fontFamily: "laila",
        opacity: "0.7",
        fontSize: "2.5rem",
        marginLeft: "7rem",
        fontWeight: "600",
        marginTop: "7rem"
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
                    <Typography className={classes.typo}>
                        Order History
                    </Typography>
                    <OrderComponent data={orders} />
                </>

            }
        </div>
    )
}
