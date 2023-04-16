import { useDispatch, useSelector } from 'react-redux'
import { useGetCarsQuery } from '../../store/carsApi.js'
import { setCurrentPage } from '../../store/initialCarsSlice.js'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import Search from '../../components/Search/Search.jsx'
import CarItem from '../../components/CarItem/CarItem.jsx'
import Category from '../../components/Category/Category.jsx'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const dispatch = useDispatch()
	const { searchName, currentPage, category } = useSelector(state => state.initialCars)

	const body = {
		page: currentPage,
		search: searchName,
		category: category
	}

	const { data: cars = [], isLoading } = useGetCarsQuery(body)

	const onChangePage = (page) => {
		dispatch(setCurrentPage(page))
	}

	if (isLoading) return <Spinner />

	return (
		<div className={styles.container}>
			<Navigation />
			<Search />
			<div className={styles.category}><Category /></div>
			<CarItem data={cars} key={cars.id} />
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default HomePage
