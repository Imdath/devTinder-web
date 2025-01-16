import store from './appStore'
import axios from 'axios'
import { setStatus, setLoading } from './userSlice'
import { BASE_URL } from './constants'

const customAxios = async (url, method = 'GET', body = null, withCredentials = true) => {
	try {
		// Set loading to true
		store.dispatch(setLoading(true))

		const config = {
			method,
			url: `${BASE_URL}${url}`, // Append the provided URL to the base URL
			data: body,
			withCredentials,
		}

		const response = await axios(config)

		// Handle success response
		store.dispatch(
			setStatus({
				status: 'success',
				message: response.data.message || 'Operation successful',
			})
		)
		return response.data
	} catch (error) {
		// Handle error response
		store.dispatch(
			setStatus({
				status: 'error',
				message: error.response?.data?.message || 'An error occurred',
			})
		)
		throw error // Rethrow the error for the calling function to handle
	} finally {
		// Set loading to false after the API call finishes
		store.dispatch(setLoading(false))
		// Reset status and message after a short delay to ensure toast is displayed
		setTimeout(() => {
			store.dispatch(
				setStatus({
					status: null,
					message: '',
				})
			)
		}, 5000)
	}
}

export default customAxios
