import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [loginForm, setLoginForm] = useState({ email: 'forlan@mailinator.com', password: 'Forlan@123' })

	const handleLoginForm = (name, value) => {
		setLoginForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleOnLogin = async () => {
		try {
			const result = await axios.post(
				BASE_URL + '/login',
				{ emailId: loginForm.email, password: loginForm.password },
				{ withCredentials: true }
			)
			dispatch(addUser(result.data.data))
			navigate('/')
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<div className='flex justify-center my-10'>
			<div className='card bg-base-300 w-96 shadow-xl'>
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
