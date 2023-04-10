import React, { useMemo, useState } from 'react'
import styles from './HomePage.module.scss'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../store/filterSlice.js'
import { BsSearch } from 'react-icons/bs'
import CarsList from '../../components/CarsList/CarsList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import { useGetCarsQuery } from '../../store/carsApi.js'

const HomePage = () => {
	const [searchQuery, setSearchQuery] = useState('')

	const { currentPage } = useSelector((state) => state.filter)
	const { data: cars = [], error, isLoading } = useGetCarsQuery(currentPage)
	const dispatch = useDispatch()

	const searchCars = useMemo(() => {
		return cars.filter((car) =>
			car.title.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, cars])

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number))
	}
	if (isLoading) return <Spinner />
	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.input_wrapper}>
				<BsSearch size={22} className={styles.search_icon} />
				<input
					className={styles.search_input}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					type="text"
					placeholder="Search car..."
				/>
			</div>
			{!searchCars.length ? (
				<div className={styles.notFound}>cars not found!</div>
			) : (
				<CarsList cars={searchCars} key={cars.id} />
			)}
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default HomePage
