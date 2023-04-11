import { useDispatch, useSelector } from 'react-redux'
import { useGetCarsQuery } from '../../store/carsApi.js'
import { setCurrentPage } from '../../store/initialCarsSlice.js'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import Search from '../../components/Search/Search.jsx'
import CarItem from '../../components/CarItem/CarItem.jsx'
import Sort from '../../components/Sort/Sort.jsx'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const dispatch = useDispatch()
	const { searchName, currentPage } = useSelector(state => state.initialCars)
	
	const body = {
		page: currentPage,
		search: searchName
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
			<Sort />
			<CarItem data={cars} key={cars.id} />
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default HomePage
