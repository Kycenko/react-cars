import React from 'react';
import styles from './CarsItem.module.scss'
import MyButton from "../UI/button/MyButton.jsx";

const CarsItem = ({car}) => {
	return (
		<div>
			<div className={styles.item}>
				<div className={styles.image}
				     style={{backgroundImage: `url(${car.image})`}}></div>
			</div>
			<div className={styles.info}>
				<h2>{car.title}</h2>
				<p>{car.price}$</p>
				<MyButton>Read more</MyButton>
			</div>
		</div>
		
	
	);
};

export default CarsItem;
