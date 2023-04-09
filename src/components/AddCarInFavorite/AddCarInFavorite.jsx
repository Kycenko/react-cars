import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	deleteCarInFavorite,
	setCarInFavorite
} from '../../store/favoriteSlice.js'
import styles from './AddCarInFavorite.module.scss'

const AddCarInFavorite = ({ car }) => {
	const dispatch = useDispatch()
	const cars = useSelector((state) => state.favorite.carsInFavorite)
	const isCarInFavorite = cars.some((item) => item.id === car.id)

	const handleClick = (e) => {
		e.stopPropagation()
		if (isCarInFavorite) {
			dispatch(deleteCarInFavorite(car.id))
		} else {
			dispatch(setCarInFavorite(car))
		}
	}
	return (
		<div className={styles.buttons}>
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

export default AddCarInFavorite;
