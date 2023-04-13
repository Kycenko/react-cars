import React from 'react'
import { Link } from 'react-router-dom'
import AddCarInFavorite from '../AddCarInFavorite/AddCarInFavorite.jsx'
import styles from './CarItem.module.scss'

const CarItem = ({ data }) => {
	
	if (!data.length)
		return <div className={styles.notFound}>Cars not found!</div>
	
	return (<div className={styles.container}>
			{data?.map(car => <div key={car.id} className={styles.productItem}>
				<Link to={`/car/${car.id}`}>{<img src={`${car.image}`} alt={car.title} />}</Link>
				<div className={styles.productInfo}>
					<h3>{car.title}</h3>
					<p>{car.category}</p>
					<AddCarInFavorite cars={car} />
				</div>
			</div>)}
		</div>
	)
}
export default CarItem
