import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { Redirect } from 'react-router-dom';
import FormFile from './FormFile';
export default function AddProduct() {
    const access = Cookies.get('x-access');
    if (access) {
        const decode = jwtDecode(access);
        if (decode.user_role === "ORG") {
            return (

                <>
                </>

            )
        }
    }
    else {
        return <Redirect to='/' replace />
    }

}
