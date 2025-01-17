import React from 'react'
import customAxios from '../utils/customAxios'

const UserCard = ({ user, fetchFeed }) => {
	const { _id, firstName, lastName, age, gender, about, photoUrl } = user

	const handleSendRequest = async (status, requestId) => {
		try {
			await customAxios(`/request/send/${status}/${requestId}`, 'POST', null, true)
			fetchFeed()
		} catch (error) {
			// error
		}
	}

	return (
		user && (
			<div className='card bg-base-300 w-80 shadow-xl'>
				<figure className='px-5 pt-5'>
					<img src={photoUrl} alt='user' className='rounded-xl w-full max-w-[80%] h-auto max-h-[200px] object-cover' />
				</figure>
				<div className='card-body items-center text-center p-2'>
					<h2 className='card-title'>{firstName + ' ' + lastName}</h2>
					{gender && age && <p>{age + ', ' + gender}</p>}
					{about && <p>{about}</p>}
					<div className='card-actions justify-center my-4'>
						<button className='btn btn-primary' onClick={() => handleSendRequest('ignored', _id)}>
							Ignore
						</button>
						<button className='btn btn-secondary' onClick={() => handleSendRequest('interested', _id)}>
							Interested
						</button>
					</div>
				</div>
			</div>
		)
	)
}

export default UserCard
