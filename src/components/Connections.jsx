import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Connections = () => {
	const { connections } = useSelector((store) => store.connections)

	const fetchConnections = () => {
		try {
			const result = await
		} catch (error) {
			// error
		}
	}

	useEffect(() => {
		fetchConnections()
	}, [])

	return (
		<div className='card bg-neutral text-neutral-content w-96'>
			<div className='card-body flex flex-row align-center text-center'>
				{/* Image with rounded corners */}
				<div className='flex-shrink-0'>
					<img src='https://via.placeholder.com/150' alt='Cookie' className='w-20 h-20 rounded-full mr-4' />
				</div>

				{/* Text on the right */}
				<div className='flex-grow text-left'>
					<h2 className='card-title'>Cookies!</h2>
					<p>We are using cookies for no reason.</p>
				</div>
			</div>

			{/* Buttons centered below */}
			<div className='card-actions justify-center mb-4'>
				<button className='btn btn-primary'>Accept</button>
				<button className='btn btn-ghost'>Deny</button>
			</div>
		</div>
	)
}

export default Connections
