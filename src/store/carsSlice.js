import { createSlice } from '@reduxjs/toolkit'

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		currentCar: null
	},
	reducers: {
		setCurrentCar: (state, action) => {
			state.currentCar = action.payload
		}
	}
})

export const { setCurrentCar } = carsSlice.actions
export default carsSlice.reducer
