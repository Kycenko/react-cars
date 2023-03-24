import React from 'react';
import styles from './NavBar.module.scss'
const NavBar = () => {
	return (
		<div className={styles.main}>
			<div><a href="">Home</a></div>
			<div><a href="">AddCar</a></div>
		</div>
	);
};

export default NavBar;
