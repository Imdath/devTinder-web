import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import customAxios from '../utils/customAxios'
import { addConnections } from '../utils/connectionsSlice'

const Connections = () => {
	const { connections } = useSelector((store) => store.connections)
	const dispatch = useDispatch()

	const fetchConnections = async () => {
		try {
			const result = await customAxios('/user/connections', 'GET', null, true, { showLoader: true, showToast: false })
			dispatch(addConnections(result.data))
		} catch (error) {
			// error
		}
	}

	useEffect(() => {
		fetchConnections()
	}, [])

	return (
		connections &&
		connections.map((connection) => {
			return (
				<div key={connection?._id} className='card bg-base-300 text-base-content w-80 m-2'>
					<div className='card-body flex flex-row align-center text-center'>
						{/* Image with rounded corners */}
						<div className='flex-shrink-0'>
							<img src={connection?.photoUrl} alt='connection' className='w-20 h-20 rounded-full mr-4' />
						</div>

						{/* Text on the right */}
						<div className='flex-grow text-left'>
							<h2 className='card-title'>{connection?.firstName}</h2>
							{connection?.age && connection?.gender && <p>{connection?.age + ', ' + connection?.gender}</p>}
							<p>{connection?.about}</p>
						</div>
					</div>
				</div>
			)
		})
	)
}

export default Connections
