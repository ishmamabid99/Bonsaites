// import { createTheme, ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core'
// import React, { useContext, useEffect, } from 'react'
// import WebDrawer from './WebDrawer';
// import MobileNav from './MobileNav';
// import { green } from '@material-ui/core/colors';
// import AdminApi from '../../contexts/AdminApi';
// import { Redirect } from 'react-router-dom';
// import NavProps from '../../contexts/NavProps';

// export default function AdminDashboard(props) {

//     const nav = useContext(NavProps);
//     nav.setNav("ADMINLOGGED");
//     const admin = useContext(AdminApi)
//     alert(admin.isAdmin)
//     const theme = useTheme();
//     const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
//     const themePro = createTheme({
//         palette: {
//             primary: {
//                 main: green[900],
//             },

//             secondary: {
//                 main: '#F2F2F2',
//             },
//         },
//         fontFamily: 'Overpass'
//     });
//     if (admin.isAdmin) {
//         return (
//             <div >
//                 <ThemeProvider theme={themePro}>
//                     {!isMatch ?
//                         <>
//                             <WebDrawer />
//                         </>
//                         :
//                         <>
//                             <MobileNav />
//                         </>

//                     }
//                 </ThemeProvider>
//             </div>
//         )
//     }
//     else {
//         alert("Pi")
//         return (
//             <Redirect to='/' replace />
//         )
//     }
// }

import { createTheme, ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useContext } from 'react'
import AdminApi from '../../contexts/AdminApi';
import NavProps from '../../contexts/NavProps'
import WebDrawer from './WebDrawer';
import MobileNav from './MobileNav';
import { green } from '@material-ui/core/colors';
export default function AdminDashboard() {
    const nav = useContext(NavProps);
    const admin = useContext(AdminApi)
    nav.setNav("ADMINLOGGED")
    console.log(admin);
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

    return (
        <>
            {admin.isAdmin ?
                <>
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
                </>
                :
                null
            }
        </>
    )
}
