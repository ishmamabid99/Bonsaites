import { makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import NavProps from '../components/NavProps'
const useStyles = makeStyles(theme => ({
    root: {
        background: '#eae8e9',
    }
}))

export default function OrgHome(props) {
    const classes = useStyles();
    const nav = useContext(NavProps)
    console.log(props)
    return (
        <div className={classes.root}>OrgHome</div>
    )
}
