import React, { useEffect, useState } from 'react'
import { getRequests } from '../../functions/getData'
import { CircularProgress, CssBaseline, makeStyles, Typography } from '@material-ui/core'
import AdminCardComponent from './AdminCardComponent';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorPage from '../../components/ErrorPage';
import useForceUpdate from '../../CustomHooks/useForceUpdate';
const useStyles = makeStyles(theme => ({
    progressBar: {
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        color: 'red'
    },
}))
export default function Requests() {
    const classes = useStyles();
    const [fetch, setFetch] = useState(false)
    const [reqData, setReqData] = useState(undefined)
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        let ifData = true;
        console.log(fetch)
        const getData = async () => {
            try {
                const ret = await getRequests();
                console.log(ret)
                if (ret.length != 0 && ifData) {
                    setReqData(ret);
                    console.log('wie')
                }
                else {
                    setReqData("None to show");
                }

            }
            catch (err) {
                console.log(err)
            }
        }
     
        const interval = setInterval(() => {
            getData()
        }, 1000)


        return () => clearInterval(interval)

    }, [])
    return (
        <div>
            {reqData === undefined ?
                <>
                    <CircularProgress className={classes.progressBar} />
                </>
                :
                <>
                    {reqData === "None to show" || reqData === [] ?
                        <>
                            <ErrorPage
                                icon={<ErrorIcon style={{ fontSize: "5rem", color: '#FFB200' }} />}
                                title=""
                                message="There is no requests pending right now.You will find them here if any available."

                            // primaryActionLabel="Go back"
                            // primaryAction={() => console.log("Primary action")}
                            // secondaryActionLabel="Support"
                            // secondaryAction={() => console.log("Secondary action")}
                            />
                            <CssBaseline />
                        </>
                        :

                        <AdminCardComponent data={reqData} forceUpdate={forceUpdate} />
                    }

                </>
            }
        </div>
    )
}
