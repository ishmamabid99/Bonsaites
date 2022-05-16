import React, { useContext } from 'react'
import NavProps from '../components/NavProps'
export default function Landing() {
    const nav =useContext(NavProps);
    nav.setNav("LANDING")
    return (
        <div>Landing</div>
    )
}
