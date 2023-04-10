import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteCarInFavorite,
	setCarInFavorite
} from '../../store/favoriteSlice.js'
import styles from './AddCarInFavorite.module.scss'

const AddCarInFavorite = ({ cars }) => {
	const dispatch = useDispatch()
	const addCars = useSelector((state) => state.favorite.carsInFavorite)
	const isCarInFavorite = addCars.some((item) => item.id === cars.id)

	const handleClick = (e) => {
		e.stopPropagation()
		if (isCarInFavorite) {
			dispatch(deleteCarInFavorite(cars.id))
		} else {
			dispatch(setCarInFavorite(cars))
		}
	}
	return (
		<div className={styles.container}>
			{isCarInFavorite ? (
				<img
					className={styles.icon}
					onClick={handleClick}
					src="/public/img/remove-from-favorites-icon.svg"
					alt=""
				/>
			) : (
				<img
					className={styles.icon}
					onClick={handleClick}
					src="/public/img/add-to-favorites-icon.svg"
					alt=""
				/>
			)}
		</div>
	)
}

export default AddCarInFavorite
