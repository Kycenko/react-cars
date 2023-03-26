import React, {useMemo, useState} from 'react';
import styles from './NavBar.module.scss'

const NavBar = ({children}) => {

	return (
		<div className={styles.main}>
			{children}
		</div>
	);
};

export default NavBar;
