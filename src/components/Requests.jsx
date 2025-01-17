import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import customAxios from '../utils/customAxios'
import { addRequests } from '../utils/requestsSlice'

const Requests = () => {
	const { requests } = useSelector((store) => store.requests)
	const dispatch = useDispatch()

	console.log(requests)

	const fetchRequests = async () => {
		try {
			const result = await customAxios('/user/requests/received', 'GET', null, true, { showLoader: true, showToast: false })
			dispatch(addRequests(result.data))
		} catch (error) {
			// error
		}
	}

	useEffect(() => {
		fetchRequests()
	}, [])

	return (
		requests &&
		requests.map((request) => {
			const { _id } = request
			const { photoUrl, firstName, age, gender, about } = request.fromUserId

			return (
				<div key={_id} className='card bg-base-300 text-neutral-content w-80 m-2'>
					<div className='card-body flex flex-row align-center text-center'>
						{/* Image with rounded corners */}
						<div className='flex-shrink-0'>
							<img src={photoUrl} alt='request' className='w-20 h-20 rounded-full mr-4' />
						</div>

						{/* Text on the right */}
						<div className='flex-grow text-left'>
							<h2 className='card-title'>{firstName}</h2>
							{age && gender && <p>{age + ', ' + gender}</p>}
							<p>{about}</p>
						</div>
					</div>

					{/* Buttons centered below */}
					<div className='card-actions justify-center mb-4'>
						<button className='btn btn-secondary'>Accept</button>
						<button className='btn btn-primary'>Deny</button>
					</div>
				</div>
			)
		})
	)
}

export default Requests
