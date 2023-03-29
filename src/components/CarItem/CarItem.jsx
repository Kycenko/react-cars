import React from 'react';
import styles from './CarItem.module.scss'

import {Link} from "react-router-dom";

const CarItem = ({car}) => {
	return (
		<div>
			<div className={styles.item}>
				<div className={styles.image}>
					{<img className={styles.image} src={`${car.image}`} alt=""/>}
				</div>
			</div>
			<div className={styles.info}>
				<h2>{car.title}</h2>
				<p>{new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'USD', }).format(car.price)}</p>
			<Link className={styles.myLink} to={`/car/${car.id}`}>Read more</Link>
			</div>
		</div>
		
	
	);
};

export default CarItem;
