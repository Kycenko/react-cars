import React from 'react';
import styles from './MyModal.module.scss'
const MyModal = ({children}) => {
	return (
		<div className={styles.myModal1}>
			<div className={styles.myModalContent}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
