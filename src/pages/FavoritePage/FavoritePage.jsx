import React from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useSelector } from 'react-redux'

const FavoritePage = () => {
	const cars = useSelector((state) => state.favorite.carsInFavorite)
	return (
		<div>
			<Navigation />

			{cars.map((car) => (
				<div key={car.id}>{car.title}</div>
			))}
		</div>
	)
}

export default FavoritePage;
