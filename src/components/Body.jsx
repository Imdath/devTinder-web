import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import customAxios from '../utils/customAxios'
import { BASE_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice'
import { getCookie } from '../utils/functions'

const Body = () => {
	const { status, message, loading } = useSelector((store) => store.user)
	const [showToast, setShowToast] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const cookie = getCookie('token')

	const fetchUser = async () => {
		try {
			const result = await customAxios('/profile/view', 'GET', null, true, { showLoader: false, showToast: false })
			dispatch(addUser(result))
		} catch (error) {
			// Handle error if needed (will be shown as toast already)
		}
	}

	useEffect(() => {
		if (cookie) {
			fetchUser()
		}
	}, [])

	useEffect(() => {
		if (status === 'error' || status === 'success') {
			setShowToast(true)
			setTimeout(() => setShowToast(false), 5000) // Hide toast after 3 seconds
		}
	}, [status, message])

	return (
		<div className='flex flex-col min-h-screen'>
			<NavBar />
			<div className='flex-1 pt-10 m-5 flex flex-col gap-2 mt-10 items-center'>
				<Outlet />
			</div>
			<Footer />
			{showToast && (
				<div className='toast toast-end z-50 mb-12'>
					{status === 'error' && (
						<div className='alert alert-error'>
							<span>{message}</span>
						</div>
					)}
					{status === 'success' && (
						<div className='alert alert-success'>
							<span>{message}</span>
						</div>
					)}
				</div>
			)}
			{loading && (
				<div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
					<span className='loading loading-spinner loading-lg text-white'></span>
				</div>
			)}
		</div>
	)
}

export default Body
