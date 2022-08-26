import { CssBaseline, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getSupplierOrders } from '../functions/getData';
import ErrorPage from './ErrorPage';
import WarningIcon from '@material-ui/icons/WarningRounded'
import ProgressBar from './ProgressBar';
import SupplyComponent from './SupplyComponent';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "7rem"
    }
}))
export default function SupplyRequests() {
    const classes = useStyles();
    const [supData, setSupData] = useState([]);
    const [count_, setCount_] = useState(0)
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getSupplierOrders();
                console.log(data)
                if (data)
                    setSupData(data)
                else {
                    setSupData([])
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        const interval = setInterval(() => {
            getData();
        }, 5000);
        return () => clearInterval();

    }, [count_])
    return (
        <div className={classes.root} align='center'>
            {supData.length === 0 || supData === undefined ?
                <>
                    {supData === undefined ?
                        <>
                            <ProgressBar />
                        </>
                        :
                        <>
                            <ErrorPage
                                icon={<WarningIcon style={{ fontSize: "5rem", color: '#FFB200' }} />}
                                title=""
                                message="There is no requests pending right now.You will find them here if any available."

                            // primaryActionLabel="Go back"
                            // primaryAction={() => console.log("Primary action")}
                            // secondaryActionLabel="Support"
                            // secondaryAction={() => console.log("Secondary action")}
                            />
                            <CssBaseline />
                        </>

                    }


                </>
                :
                <>
                    <SupplyComponent data={supData} count_={count_} setCount_={setCount_} />
                </>

            }

        </div>
    )
}
