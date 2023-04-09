import React from 'react'
import FavoriteBlock from '../FavoriteBlock/FavoriteBlock.jsx'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.wrapper}>
				<Link to="/">
					<img
						className={styles.logo}
						src="/img/auto-shop-1-logo-svg-vector.svg"
						alt=""
					/>
				</Link>
			</div>
			<div className={styles.favourite_wrapper}>
				<FavoriteBlock />
			</div>
		</div>
	)
}

export default Navigation;
