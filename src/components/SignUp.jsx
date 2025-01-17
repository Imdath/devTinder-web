import React, { useState } from 'react'
import customAxios from '../utils/customAxios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
	const navigate = useNavigate()
	const [signUpForm, setSignUpForm] = useState({
		firstName: '',
		lastName: '',
		emailId: '',
		password: '',
		photoUrl: '',
		age: '',
		gender: '',
		about: '',
	})

	const handleSignUpForm = (name, value) => {
		setSignUpForm((prev) => ({ ...prev, [name]: value }))
	}

	const handleOnSignUp = async () => {
		try {
			await customAxios('/signup', 'POST', { ...signUpForm }, true)
			navigate('/profile')
		} catch (error) {
			// error
		}
	}

	return (
		<div className='flex justify-center m-4'>
			<div className='card bg-base-300 w-80 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title justify-center'>Sign Up</h2>
					<div>
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>First Name</span>
							</div>
							<input
								type='text'
								placeholder='Enter First Name'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.firstName}
								onChange={(e) => handleSignUpForm('firstName', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Last Name</span>
							</div>
							<input
								type='text'
								placeholder='Enter Last Name'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.lastName}
								onChange={(e) => handleSignUpForm('lastName', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Email</span>
							</div>
							<input
								type='text'
								placeholder='Enter Email ID'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.emailId}
								onChange={(e) => handleSignUpForm('emailId', e.target.value)}
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
								value={signUpForm.password}
								onChange={(e) => handleSignUpForm('password', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Age</span>
							</div>
							<input
								type='text'
								placeholder='Enter Age'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.age}
								onChange={(e) => handleSignUpForm('age', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Gender</span>
							</div>
							<input
								type='text'
								placeholder='Enter Gender'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.gender}
								onChange={(e) => handleSignUpForm('gender', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>Photo URL</span>
							</div>
							<input
								type='text'
								placeholder='Enter Photo URL'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.photoUrl}
								onChange={(e) => handleSignUpForm('photoUrl', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>About</span>
							</div>
							<input
								type='text'
								placeholder='Enter About You'
								className='input input-bordered w-full max-w-xs'
								value={signUpForm.about}
								onChange={(e) => handleSignUpForm('about', e.target.value)}
							/>
						</label>
					</div>
					<div className='card-actions justify-center mt-3'>
						<button className='btn btn-primary' onClick={handleOnSignUp}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
