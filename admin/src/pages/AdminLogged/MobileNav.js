import React from 'react'
import { Button, Grid, ListItemIcon, makeStyles, Toolbar } from '@material-ui/core'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import { useState } from 'react'
import Overview from './Overview';
import Analytics from './Analytics';
import Export from './Export';
import Transactions from './Transactions';
import Requests from './Requests';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    icon: {
        fontSize: "3rem"
    },
    listText: {
        fontFamily: "Overpass",
        fontSize: "1.25rem"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing(3)
    },
    icon: {
        fontSize: "3rem"
    },
    typograph: {
        fontSize: "1.5rem",
        fontWeight: "500",
        opacity: "0.7"
    },
    mobileToolbar: {
        background: "#F2F2F2"
    }

}))
export default function MobileNav() {
    const classes = useStyles();
    const [page, setPage] = useState(0)
    return (
        <>

            <Toolbar className={classes.mobileToolbar}>
                <Grid container justifyContent='space-between'>

                    <Button onClick={() => { setPage(0) }}>
                        <ListItemIcon ><EmojiObjectsIcon color='primary' className={classes.icon} /></ListItemIcon>

                    </Button>

                    <Button button onClick={() => { setPage(1) }}>
                        <ListItemIcon><AssessmentIcon color='primary' className={classes.icon} /></ListItemIcon>
                    </Button>
                    <Button button onClick={() => { setPage(2) }}>
                        <ListItemIcon><ImportExportIcon color='primary' className={classes.icon} /></ListItemIcon>

                    </Button>
                    <Button button onClick={() => { setPage(3) }}>
                        <ListItemIcon><ReceiptIcon color='primary' className={classes.icon} /></ListItemIcon>

                    </Button>
                    <Button button onClick={() => { setPage(4) }}>
                        <ListItemIcon><NewReleasesIcon color='primary' className={classes.icon} /></ListItemIcon>

                    </Button>

                </Grid>
            </Toolbar>
            <>

                <div>
                    <div className={classes.toolbar} />
                    <>
                        {page === 0 ?
                            <Overview />
                            :
                            null

                        }
                    </>
                    <>
                        {page === 1 ?
                            <Analytics />
                            :
                            null

                        }
                    </>
                    <>
                        {page === 2 ?
                            <Export />
                            :
                            null

                        }
                    </>
                    <>
                        {page === 3 ?
                            <Transactions />
                            :
                            null

                        }
                    </>
                    <>
                        {page === 4 ?
                            <Requests />
                            :
                            null

                        }
                    </>
                </div>
            </>
        </>
    )
}
