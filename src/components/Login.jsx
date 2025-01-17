import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import customAxios from '../utils/customAxios'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [loginForm, setLoginForm] = useState({ email: 'forlan@mailinator.com', password: 'Forlan@123' })

	const handleLoginForm = (name, value) => {
		setLoginForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleOnLogin = async () => {
		try {
			// Call the login API using customAxios
			const result = await customAxios('/login', 'POST', {
				emailId: loginForm.email,
				password: loginForm.password,
			})

			// Dispatch user data to the Redux store
			dispatch(addUser(result.data))

			// Navigate to home page after successful login
			navigate('/')
		} catch (error) {
			// Error will be handled inside customAxios, but you can also do something here
		}
	}

	return (
		<div className='flex justify-center m-4'>
			<div className='card bg-base-300 w-80 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title justify-center'>Login</h2>
					<div>
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>Email ID</span>
							</div>
							<input
								type='text'
								placeholder='Enter Email ID'
								className='input input-bordered w-full max-w-xs'
								value={loginForm.email}
								onChange={(e) => handleLoginForm('email', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Password</span>
							</div>
							<input
								type='password'
								placeholder='Enter Password'
								className='input input-bordered w-full max-w-xs'
								value={loginForm.password}
								onChange={(e) => handleLoginForm('password', e.target.value)}
							/>
						</label>
					</div>
					<div className='card-actions justify-center mt-3'>
						<button className='btn btn-primary' onClick={handleOnLogin}>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
