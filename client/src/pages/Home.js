import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import OrgHome from './OrgHome'
import Landing from './Landing'
import Bank from './Bank'
import BankApi from '../contexts/BankApi'
export default function Home() {
    const [user_role, setRole] = useState(null);
    const bank = useContext(BankApi)
    const [access, setAccess] = useState(false)
    useEffect(() => {
        if (Cookies.get('x-access')) {
            const { user_role, user_bank, user_name } = jwt_decode(Cookies.get('x-access'));
            setRole(user_role);
            setAccess(true)
        }

    }, [bank])

    return (
        <>
            {access ?
                <>
                    {bank === true ?
                        <>
                            {user_role === "ORG" ?
                                <OrgHome />
                                :
                                <Landing />
                            }
                        </>
                        :

                        <Bank />
                    }
                </>
                :
                <Landing />
            }
        </>
    )
}
