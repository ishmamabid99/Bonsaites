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
    title: {
        fontFamily: "laila",
        opacity: "0.7",
        fontSize: "2.5rem",
        marginLeft: "7rem",
        fontWeight: "600"
    }
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
                    <Typography className={classes.title}>Requests</Typography>
                    {reqData === "None to show" || reqData === [] ?
                        <div style={{ marginBottom: "25rem", marginTop: "-7rem" }}>
                            <ErrorPage

                                icon={<ErrorIcon style={{ fontSize: "5rem", color: '#FFB200' }} />}
                                title=""
                                message="There is no requests pending right now.You will find them here if any available."

                            // primaryActionLabel="Go back"
                            // primaryAction={() => console.log("Primary action")}
                            // secondaryActionLabel="Support"
                            // secondaryAction={() => console.log("Secondary action")}
                            />

                        </div>
                        :

                        <AdminCardComponent data={reqData} />
                    }

                </>
            }
        </div>
    )
}
