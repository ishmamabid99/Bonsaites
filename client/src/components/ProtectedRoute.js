import React from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedRoute({ isLoggedin, children }) {

    if (isLoggedin) return <Redirect to='/' />
    else return children;
}

export default ProtectedRoute