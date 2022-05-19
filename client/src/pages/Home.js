import React from 'react'
import OrgHome from './OrgHome';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'
import Landing from './Landing';
export default function Home(props) {
    console.log(props.org);
    const check = Cookies.get('x-access')
    if (check) {
        const token = jwt_decode(check);
        const role = token.user_role
        if (role === "ORG") {
            return <OrgHome />
        }
        else if (role === 'REGULAR') {
            return (
                <Landing />
            )

        }
        else {
            return (
                <Landing />
            )
        }
    }
    else {
        return (
            <Landing />
        )
    }
}
