import React from 'react'
import styles from './CarItem.module.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentCar } from '../../store/carsSlice.js'
import AddCarInFavorite from '../AddCarInFavorite/AddCarInFavorite.jsx'

const CarItem = ({ car }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const moveToCarItem = () => {
		dispatch(setCurrentCar(car))
		navigate(`/car/${car.id}`)
	}
	return (
		<div className={styles.productItem}>
			{<img onClick={moveToCarItem} src={`${car.image}`} alt="" />}
			<div className={styles.productInfo}>
				<h3>{car.title}</h3>
				<AddCarInFavorite car={car} />
			</div>
		</div>
	)
}

export default CarItem
