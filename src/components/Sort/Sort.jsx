import React from 'react'
import styles from './Sort.module.scss'

const Sort = () => {
	return (
		<div className={styles.container}>
			Сортировка:
			<select className={styles.optionBlock} name='' id=''>
				<option value=''>По убыванию</option>
				<option value=''>По возрастанию</option>
			</select>
			<hr />
		</div>
	)
}

export default Sort
