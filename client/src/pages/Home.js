import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import OrgHome from './OrgHome'
import Landing from './Landing'
import Bank from './Bank'
import BankApi from '../contexts/BankApi'
import AuthApi from '../contexts/AuthApi'
import NavProps from '../components/NavProps'
export default function Home() {
    const bank = useContext(BankApi)
    const auth = useContext(AuthApi);
    const nav = useContext(NavProps)
    const [access, setAccess] = useState(false);
    useEffect(() => {
        if (Cookies.get('x-access')) {
            const { user_bank } = jwt_decode(Cookies.get('x-access'));
            bank.setBank(user_bank);
            setAccess(true)
        }

    }, [auth, nav, bank])
    console.log(bank)
    return (
        <>
            {access ?
                <>
                    {bank.bank === true ?
                        <>
                            {nav.nav === "ORG" ?
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
