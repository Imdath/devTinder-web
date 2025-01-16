import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import customAxios from '../utils/customAxios'
import { addUser } from '../utils/userSlice'

const Profile = () => {
	const { user } = useSelector((store) => store.user)
	const dispatch = useDispatch()
	const [profileForm, setProfileForm] = useState({ firstName: '', lastName: '', age: '', gender: '', photoUrl: '', about: '' })

	const handleProfileForm = (name, value) => {
		setProfileForm((prev) => ({ ...prev, [name]: value }))
	}

	console.log({ ...profileForm }, 'kdcnjsacnkjdnskasndc')

	const handleSaveProfile = async () => {
		try {
			const result = await customAxios('/profile/edit', 'PATCH', { ...profileForm }, true)
			console.log(result, 'kajcnkjnkjadnckjadn')
		} catch (error) {
			// error
		}
	}

	useEffect(() => {
		if (user) {
			setProfileForm((prevForm) => {
				const updatedForm = { ...prevForm }
				Object.keys(user).forEach((key) => {
					if (key in updatedForm) {
						updatedForm[key] = user[key]
					}
				})
				return updatedForm
			})
		}
	}, [user])

	return (
		<div className='flex justify-center my-10'>
			<div className='card bg-base-300 w-96 shadow-xl'>
				<div className='card-body'>
					<h2 className='card-title justify-center'>Edit Profile</h2>
					<div>
						<label className='form-control w-full max-w-xs'>
							<div className='label'>
								<span className='label-text'>First Name</span>
							</div>
							<input
								type='text'
								placeholder='Enter First Name'
								className='input input-bordered w-full max-w-xs'
								value={profileForm.firstName}
								onChange={(e) => handleProfileForm('firstName', e.target.value)}
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
								value={profileForm.lastName}
								onChange={(e) => handleProfileForm('lastName', e.target.value)}
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
								value={profileForm.photoUrl}
								onChange={(e) => handleProfileForm('photoUrl', e.target.value)}
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
								value={profileForm.age}
								onChange={(e) => handleProfileForm('age', e.target.value)}
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
								value={profileForm.gender}
								onChange={(e) => handleProfileForm('gender', e.target.value)}
							/>
						</label>
						<label className='form-control w-full max-w-xs mt-2'>
							<div className='label'>
								<span className='label-text'>About</span>
							</div>
							<input
								type='text'
								placeholder='Enter About Yourself'
								className='input input-bordered w-full max-w-xs'
								value={profileForm.about}
								onChange={(e) => handleProfileForm('about', e.target.value)}
							/>
						</label>
					</div>
					<div className='card-actions justify-center mt-3'>
						<button className='btn btn-primary' onClick={handleSaveProfile}>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
