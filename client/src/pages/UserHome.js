import React, { useContext } from 'react'
import NavProps from '../components/NavProps'

export default function UserHome() {
    const nav = useContext(NavProps)
    nav.setNav("USER")
    return (
        <div>UserHome</div>
    )
}
