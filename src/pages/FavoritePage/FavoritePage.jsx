import React from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useSelector } from 'react-redux'
import styles from './FavoritePage.module.scss'

const FavoritePage = () => {
	const cars = useSelector((state) => state.favorite.carsInFavorite)
	
	return (
		<div>
			<Navigation />
			<div className={styles.container}>
				{cars.map((car) => (
					<div className={styles.itemContainer} key={car.id}>{car.title}
						<div>{<img src={`${car.image}`} alt={car.title} />}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default FavoritePage
