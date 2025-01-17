import { createSlice } from '@reduxjs/toolkit'

const requestsSlice = createSlice({
	name: 'requests',
	initialState: {
		requests: null,
	},
	reducers: {
		addRequests: (state, action) => {
			state.requests = action.payload
		},
	},
})

export const { addRequests } = requestsSlice.actions

export default requestsSlice.reducer
