import React from 'react'
import CarItem from '../CarItem/CarItem.jsx'
import styles from './CarList.module.scss'

const CarsList = ({ cars }) => {
	return (
		<div className={styles.container}>
			{cars.map((car) => (
				<CarItem car={car} key={car.id} />
			))}
		</div>
	)
}

export default CarsList;
