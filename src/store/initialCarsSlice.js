import { createSlice } from '@reduxjs/toolkit'

const initialCarsSlice = createSlice({
	name: 'cars',
	initialState: {
		currentPage: 1,
		category: '',
		searchName: ''
	},
	reducers: {
		setCurrentPage: (state,action) => {
			state.currentPage = action.payload
		},
		setSearchName: (state, action) => {
			state.searchName = action.payload
		}
	}
	
	
})

export const {setSearchName, setCurrentPage} = initialCarsSlice.actions
export default initialCarsSlice.reducer