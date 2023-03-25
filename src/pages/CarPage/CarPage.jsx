import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CarService} from "../../services/car.service.js";
import Loader from "../../components/UI/loader/Loader.jsx";
import NavBar from "../../components/Navbar/NavBar.jsx";
import styles from './CarPage.module.scss'
import CarItem from "../../components/CarItem/CarItem.jsx";

const CarPage = () => {
	const {id} = useParams()
	const [car, setCar] = useState({})
	
	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await CarService.getById(id)
			setCar(data)
		}
		fetchData()
	}, [id])
	
	if (!car?.title) return <div className={styles.loader}><Loader/></div>
	return (
		<div>
			<NavBar/>
			<div className={styles.main}>
				<div className={styles.car_title}>{car.title}</div>
				<div className={styles.car_content}>
					<div className={styles.car_content_left}>
						<div>{<img src={`${car.image}`} alt=""/>}</div>
					</div>
				</div>
			</div>
			<Link to='/'>Back</Link>
		
		</div>
	);
};

export default CarPage;
