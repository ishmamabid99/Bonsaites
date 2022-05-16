import { Button } from '@material-ui/core'
import Cookies from 'js-cookie'
import React, { useContext } from 'react'
import AuthApi from '../contexts/AuthApi'

export default function Profile(props) {
    const Auth = useContext(AuthApi);
    const handleLogout = () => {
        Cookies.remove('x-access')
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
