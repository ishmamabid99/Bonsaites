import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, } from '@material-ui/core'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import Overview from './Overview';
import Analytics from './Analytics';
import Export from './Export';
import Transactions from './Transactions';
import Requests from './Requests';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#F2F2F2"
    },
    drawerContainer: {
        overflow: 'auto',
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
}))
const drawerWidth = 240;
export default function WebDrawer() {
    const classes = useStyles();
    const [page, setPage] = useState(0)
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar className={classes.toolbar} />
                <div className={classes.drawerContainer}>
                    <List>

                        <ListItem button onClick={() => { setPage(0) }}>
                            <ListItemIcon ><EmojiObjectsIcon color='primary' className={classes.icon} /></ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typograph}>Overview</Typography>
                            </ListItemText>
                        </ListItem>

                        <ListItem button onClick={() => { setPage(1) }}>
                            <ListItemIcon><AssessmentIcon color='primary' className={classes.icon} /></ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typograph}>Analytics</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { setPage(2) }}>
                            <ListItemIcon><ImportExportIcon color='primary' className={classes.icon} /></ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typograph}>Export</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { setPage(3) }}>
                            <ListItemIcon><ReceiptIcon color='primary' className={classes.icon} /></ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typograph}>Transactions</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { setPage(4) }}>
                            <ListItemIcon><NewReleasesIcon color='primary' className={classes.icon} /></ListItemIcon>
                            <ListItemText>
                                <Typography className={classes.typograph}>Requests</Typography>
                            </ListItemText>
                        </ListItem>

                    </List>
                </div>
            </Drawer>
            <div className={classes.content}>
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
        </div>
    )
}
