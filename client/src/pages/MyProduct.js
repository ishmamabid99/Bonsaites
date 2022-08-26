import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import CardComponent from '../components/CardComponent';
import NavProps from '../components/NavProps'
import { getMyProducts } from '../functions/getData';

export default function MyProduct() {
    const [myProd, setMyProd] = useState([]);

    const nav = useContext(NavProps)

    useEffect(() => {
        const getData = async () => {
            try {
                const dt = await getMyProducts();
                if (dt) {
                    console.log(dt);
                    setMyProd(dt)
                }
                else {

                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [])
    return (
        <div>
            {nav.nav === "ORG" ?
                <div>
                    <CardComponent obj={myProd} />
                </div>
                :
                <Redirect to='/' replace />
            }
        </div>
    )
}
