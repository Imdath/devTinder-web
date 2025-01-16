import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getCookie } from '../utils/functions'

const ProtectedRoute = ({ children }) => {
	const cookie = getCookie('token')
	const location = useLocation()

	if (!cookie && location.pathname !== '/login') {
		return <Navigate to={'/login'} />
	}

	if (cookie && location.pathname === '/login') {
		return <Navigate to={'/'} />
	}

	return children
}

export default ProtectedRoute
