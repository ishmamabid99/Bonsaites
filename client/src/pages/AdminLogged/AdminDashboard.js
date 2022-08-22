import { createTheme, ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useContext, useEffect, } from 'react'
import NavProps from '../../components/NavProps';
import WebDrawer from './WebDrawer';
import MobileNav from './MobileNav';
import { green } from '@material-ui/core/colors';
import AdminApi from '../../contexts/AdminApi';
import { Redirect } from 'react-router-dom';

export default function AdminDashboard(props) {
    const nav = useContext(NavProps);
    const admin = useContext(AdminApi)
    nav.setNav("ADMINLOGGED");
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
    const themePro = createTheme({
        palette: {
            primary: {
                main: green[900],
            },

            secondary: {
                main: '#F2F2F2',
            },
        },
        fontFamily: 'Overpass'
    });
    if (admin.isAdmin) {
        return (
            <div >
                <ThemeProvider theme={themePro}>
                    {!isMatch ?
                        <>
                            <WebDrawer />
                        </>
                        :
                        <>
                            <MobileNav />
                        </>

                    }
                </ThemeProvider>
            </div>
        )
    }
    else {
        return (
            <Redirect to='/admin' replace />
        )
    }
}
