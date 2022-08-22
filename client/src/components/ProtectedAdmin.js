import React from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedAdmin({ isAdmin, children }) {

    if (isAdmin === true) {

        return children;
    }
    else
        return <Redirect to="/admin" replace />;
}

export default ProtectedAdmin