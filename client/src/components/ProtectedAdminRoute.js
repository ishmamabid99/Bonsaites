import React from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedAdminRoute({ isLoggedin, children }) {
    console.log(isLoggedin)
    if (isLoggedin) return <Redirect to='/admin-dashboard' replace />
    else return children;
}

export default ProtectedAdminRoute