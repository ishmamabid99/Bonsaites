import { useMediaQuery, useTheme } from '@material-ui/core'
import React, { useContext, } from 'react'
import NavProps from '../../components/NavProps';
import WebDrawer from './WebDrawer';
import MobileNav from './MobileNav';

export default function AdminDashboard() {
    const nav = useContext(NavProps);
    nav.setNav("ADMINLOGGED");
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <div >
            {!isMatch ?
                <>
                    <WebDrawer />
                </>
                :
                <>
                    <MobileNav />
                </>

            }
        </div>
    )
}
