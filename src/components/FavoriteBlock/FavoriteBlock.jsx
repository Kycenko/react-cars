import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './FavoriteBlock.module.scss'

const FavoriteBlock = () => {
	const navigate = useNavigate()
	const cars = useSelector((state) => state.favorite.carsInFavorite)
	const navigateToFavorites = () => {
		navigate('/favorites')
	}

	return (
		<div className={styles.favourite_block}>
			<img
				onClick={navigateToFavorites}
				src="/img/favorite-svgrepo-com.svg"
				className={styles.favourite_icon}
				alt=""
			/>
			<div className={styles.carsInFavourite}>{cars.length}</div>
		</div>
	)
}

export default FavoriteBlock
