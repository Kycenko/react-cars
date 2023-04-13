import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetCategoryQuery } from '../../store/carsApi.js'
import { setCategory } from '../../store/initialCarsSlice.js'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import styles from './Category.module.scss'

const Category = () => {
	const dispatch = useDispatch()
	const [categories, setCategories] = useState('All cars')
	
	const { data = [], isLoading } = useGetCategoryQuery()
	
	const handleCategoryChange = (e) => {
		dispatch(setCategory(e.target.value))
		setCategories(e.target.value)
	}
	
	if (isLoading) return <Spinner />
	
	return (
		<div className={styles.container}>
			<select className={styles.optionBlock} onChange={handleCategoryChange} name='category' id=''>
				{data?.map(category => <option key={category.id} value={category.name}>{category.visibleName}</option>)}
			</select>
			{categories.length > 0 ? categories : 'All cars'}
			<hr />
		</div>
	)
}

export default Category
