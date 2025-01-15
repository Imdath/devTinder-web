import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const Body = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const fetchUser = async () => {
		try {
			const result = await axios.get(BASE_URL + '/profile/view', { withCredentials: true })
			dispatch(addUser(result.data))
		} catch (error) {
			if (error.status === 401) {
				navigate('/login')
			}
			console.log(error)
		}
	}

	useEffect(() => {
		fetchUser()
	}, [])

	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Body
