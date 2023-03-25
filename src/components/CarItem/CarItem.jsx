import React from 'react';
import styles from './CarItem.module.scss'
import MyButton from "../UI/button/MyButton.jsx";
import {Link} from "react-router-dom";

const CarItem = ({car}) => {
	return (
		<div>
			<div className={styles.item}>
				<div className={styles.image}
				     style={{backgroundImage: `url(${car.image})`}}></div>
			</div>
			<div className={styles.info}>
				<h2>{car.title}</h2>
				<p>{car.price}$</p>
			<Link className={styles.myLink} to={`/car/${car.id}`}>Read more</Link>
			</div>
		</div>
		
	
	);
};

export default CarItem;
