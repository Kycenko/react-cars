import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeCarInFavorite,
	setCarInFavorite
} from '../../store/favoriteSlice.js'
import styles from './AddCarInFavorite.module.scss'

const AddCarInFavorite = ({ cars }) => {
	const dispatch = useDispatch()
	const addCars = useSelector((state) => state.favorite.carsInFavorite)
	const isCarInFavorite = addCars.some((item) => item.id === cars.id)

	const handleFavoriteClick = (e) => {
		e.stopPropagation()
		if (isCarInFavorite) {
			dispatch(removeCarInFavorite(cars.id))
		} else {
			dispatch(setCarInFavorite(cars))
		}
	}
	return (
		<div className={styles.container}>
			{isCarInFavorite ? (
				<img
					className={styles.icon}
					onClick={handleFavoriteClick}
					src="/public/img/remove-from-favorites-icon.svg"
					alt=""
				/>
			) : (
				<img
					className={styles.icon}
					onClick={handleFavoriteClick}
					src="/public/img/add-to-favorites-icon.svg"
					alt=""
				/>
			)}
		</div>
	)
}

export default AddCarInFavorite
