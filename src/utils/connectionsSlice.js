import { createSlice } from '@reduxjs/toolkit'

const connectionsSlice = createSlice({
	name: 'connections',
	initialState: {
		connections: null,
	},
	reducers: {
		addConnections: (state, action) => {
			state.connections = action.payload
		},
	},
})

export const { addConnections } = connectionsSlice.actions

export default connectionsSlice.reducer
