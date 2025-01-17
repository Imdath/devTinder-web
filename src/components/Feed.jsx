import React, { useEffect } from 'react'
import customAxios from '../utils/customAxios'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
	const dispatch = useDispatch()

	const { feed } = useSelector((store) => store.feed)

	const fetchFeed = async () => {
		try {
			const result = await customAxios('/user/feed', 'GET', null, true, { showLoader: false, showToast: false })
			dispatch(addFeed(result))
		} catch (error) {
			// error
		}
	}

	useEffect(() => {
		fetchFeed()
	}, [])

	return <div className='flex justify-center my-10'>{feed?.length > 0 && <UserCard user={feed[0]} />}</div>
}

export default Feed
