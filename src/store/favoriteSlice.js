import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		carsInFavorite: []
	},
	reducers: {
		setCarInFavorite: (state, action) => {
			state.carsInFavorite.push(action.payload)
		},
		deleteCarInFavorite: (state, action) => {
			state.carsInFavorite = state.carsInFavorite.filter(
				(car) => car.id !== action.payload
			)
		}
	}
})

export const { setCarInFavorite, deleteCarInFavorite } =
	favoriteSlice.actions
export default favoriteSlice.reducer
