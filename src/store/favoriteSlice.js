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
		removeCarInFavorite: (state, action) => {
			state.carsInFavorite = state.carsInFavorite.filter(
				(car) => car.id !== action.payload
			)
		}
	}
})

export const { setCarInFavorite, removeCarInFavorite } =
	favoriteSlice.actions
export default favoriteSlice.reducer
