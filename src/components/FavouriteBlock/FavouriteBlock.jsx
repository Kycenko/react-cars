import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CarsInFavourite from '../CarsInFavourite/CarsInFavourite.jsx'
import styles from './FavouriteBlock.module.scss'

const FavouriteBlock = () => {
	const navigate = useNavigate()

	const cars = useSelector(state => state.favourite.carsInFavourite)
	const navigateToFavourites = () => {
		navigate('/favourites')
	}

	return (
		<div className={styles.favourite_block}>
			<CarsInFavourite quantity={cars.length} />
			<img
				onClick={navigateToFavourites}
				src='/img/favorite-svgrepo-com.svg'
				className={styles.favourite_icon}
				alt=''
			/>
		</div>
	)
}

export default FavouriteBlock
