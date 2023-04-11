import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchName } from '../../store/initialCarsSlice.js'
import { BsSearch } from 'react-icons/bs'
import styles from '../../pages/HomePage/HomePage.module.scss'

const Search = () => {
	const dispatch = useDispatch()
	const handleSearch = (e) => {
		if (e.keyCode === 13)
			dispatch(setSearchName(e.target.value))
		if (e.target.value.length < 1)
			dispatch(setSearchName(e.target.value))
	}
	return (
		<div className={styles.input_wrapper}>
			<BsSearch size={22} className={styles.search_icon} />
			<input
				className={styles.search_input}
				onKeyUp={handleSearch}
				type='text'
				placeholder='Search car...'
			/>
		</div>
	
	
	)
}

export default Search
