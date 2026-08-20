import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    let fetchuser = localStorage.getItem('userinfo')
    if (!fetchuser){
        return <Navigate to='/login'/>
    }
  return children
}

export default ProtectedRoute