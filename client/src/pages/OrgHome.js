import React, { useContext } from 'react'
import NavProps from '../components/NavProps'


export default function OrgHome(props) {
    const nav = useContext(NavProps)
    nav.setNav("ORG")
    return (
        <div>OrgHome</div>
    )
}
