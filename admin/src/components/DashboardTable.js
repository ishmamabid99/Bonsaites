import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
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
        width: "105rem"
    },
    cell: {
        fontFamily: "overpass"
    }
}))
export default function DashboardTable(props) {
    const tabData = props.tabData;
    const classes = useStyles();
    return (
        <div align='center' className={classes.div2}>
            <TableContainer style={{ width: "105rem" }} component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography align='center' className={classes.titleTable}>From</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>To</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Product Id</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}> Quantity</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Price</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Admin Income</Typography></TableCell>
                            <TableCell><Typography align='center' className={classes.titleTable}>Supplier Income</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {tabData === [] ?
                            null
                            :
                            <>
                                {tabData.map((ele, index) => (

                                    <>{ele.state !== 0 ?

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
                                                    {0.15 * parseInt(ele.amount)}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                {0.85 * (parseInt(ele.amount))}
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
