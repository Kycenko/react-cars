import React from 'react'
import { Link } from 'react-router-dom'
import AddCarInFavorite from '../AddCarInFavorite/AddCarInFavorite.jsx'
import styles from './CarItem.module.scss'

const CarItem = ({ data }) => {
	
	if (!data.length)
		return <div className={styles.notFound}>Cars not found!</div>
	
	return (<div className={styles.container}>
			{data?.map(item => <div key={item.id} className={styles.productItem}>
				<Link to={`/car/${item.id}`}>{<img src={`${item.image}`} alt='' />}</Link>
				<div className={styles.productInfo}>
					<h3>{item.title}</h3>
					<AddCarInFavorite cars={item} />
				</div>
			</div>)}
		</div>
	)
}
export default CarItem
