import { Button } from '@material-ui/core'
import Cookies from 'js-cookie'
import React, { useContext } from 'react'
import NavProps from '../components/NavProps';
import AuthApi from '../contexts/AuthApi'

export default function Profile(props) {
    const Auth = useContext(AuthApi);
    const nav = useContext(NavProps)
    const handleLogout = () => {
        Cookies.remove('x-access');
        nav.setNav("LANDING")
        Auth.setLogin(false);
    }
    return (
        <div >

            <Button onClick={handleLogout} color='secondary' variant='contained'>
                Logout
            </Button>

        </div>
    )
}
