import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { proceedBank, updatedelivery } from '../functions/postData';
import { SwlSubmitCart, SwlSuccess } from '../functions/Swal';
const useStyles = makeStyles(theme => ({


    titleTable: {
        fontFamily: 'overpass',
        fontSize: "2rem"
    },
    div2: {
        marginLeft: '0rem',
        marginTop: "7rem"
    },
    table: {
        width: "95rem"
    },
    cell: {
        fontFamily: "overpass"
    }
}))
export default function TableComponents(props) {
    const tabData = props.tabData;
    const classes = useStyles();
    const handleDelivery = async (data) => {
        try {
            const res = await updatedelivery(data);
            if (res) {
                props.setCount(props.count + 1);
                SwlSuccess();
            }
            else {
                SwlSubmitCart();
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleBank = async (data) => {
        try {
            const res = await proceedBank(data);
            if (res) {
                props.setCount(props.count + 1);
                SwlSuccess();
            }
            else {
                SwlSubmitCart();
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div align='center' className={classes.div2}>
            <TableContainer style={{ width: "95rem" }} component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography align='center' className={classes.titleTable}>From</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>To</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Product Id</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}> Quantity</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Price</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Payment</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Action</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {tabData === [] ?
                            null
                            :
                            <>
                                {tabData.map((ele, index) => (

                                    <>{ele.state === 0 ?

                                        < TableRow key={index}>
                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.from}
                                                </Typography>
                                            </TableCell>

                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.to}
                                                </Typography>
                                            </TableCell>

                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.prod_id}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.quantity}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.amount}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography className={classes.cell}>
                                                    {ele.type}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                {ele.type === 'Payment on delivery' ?
                                                    <Button variant='contained' size='large' color='secondary' onClick={() => {
                                                        handleDelivery(ele._id)
                                                    }}>Proceed delivery</Button>
                                                    :
                                                    <Button variant='contained' size='large' color='primary' onClick={() => {
                                                        handleBank(ele._id)
                                                    }}>Proceed to bank</Button>

                                                }

                                            </TableCell>
                                        </TableRow>
                                        :
                                        null
                                    }
                                    </>
                                ))
                                }
                            </>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}
