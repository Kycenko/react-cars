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
		setCategory: (state, action) => {
			state.category = action.payload
		},
		setSearchName: (state, action) => {
			state.searchName = action.payload
		}
	}
	
	
})

export const {setSearchName, setCurrentPage, setCategory} = initialCarsSlice.actions
export default initialCarsSlice.reducer