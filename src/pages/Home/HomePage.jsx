import React, { useEffect, useMemo, useState } from 'react'
import styles from './HomePage.module.scss'
import Loader from '../../UI/loader/Loader'
import { CarService } from '../../services/car.service.js'
import NavBar from '../../components/Navbar/NavBar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../store/filterSlice.js'
import { BsSearch } from 'react-icons/bs'
import CarsList from '../../components/CarsList/CarsList.jsx'
import Pagination from '../../components/Pagination/Pagination.jsx'

const HomePage = () => {
	const [cars, setCars] = useState([])
	const [isCarsLoading, setIsCarsLoading] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	/*	const [modal, setModal] = useState(false)*/

	const { currentPage } = useSelector((state) => state.filter)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			setIsCarsLoading(true)
			const data = await CarService.getAll(currentPage)
			setCars(data)
			setIsCarsLoading(false)
		}
		window.scroll(0, 0)
		fetchData()
	}, [currentPage])

	const searchCars = useMemo(() => {
		return cars.filter((car) =>
			car.title.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, cars])

	/*const createNewCar = (newCar) => {
		setCars([...cars, newCar])
		setModal(false)
	}*/
	const onChangePage = (number) => {
		dispatch(setCurrentPage(number))
	}
	return (
		<>
			<div className={styles.container}>
				{isCarsLoading ? (
					<Loader />
				) : (
					<>
						<NavBar />
						<div className={styles.input_wrapper}>
							<BsSearch size={22} className={styles.search_icon} />
							<input
								className={styles.search_input}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								type="text"
								placeholder="Search..."
							/>
						</div>
						{!searchCars.length ? (
							<div className={styles.notFound}>cars not found!</div>
						) : (
							<CarsList cars={searchCars} key={cars.id} />
						)}
						<Pagination currentPage={currentPage} onChangePage={onChangePage} />
					</>
				)}
				{/*<MyModal visible={modal} setVisible={setModal}>*/}
				{/*  <CreateCarForm create={createNewCar} />*/}
				{/*</MyModal>*/}
				{/*<div>*/}
				{/*  <button onClick={() => setModal(true)}>AddCar</button>*/}
				{/*</div>*/}
			</div>
		</>
	)
}

export default HomePage
