import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {CarService} from "../../services/car.service.js";
import CarItem from "../../components/CarItem/CarItem.jsx";
import Loader from "../../components/UI/loader/Loader.jsx";

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
	
	if (!car?.title) return <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
	return (
		<div>
			<Link to='/'>Back</Link>
			<CarItem car={car}/>
		</div>
	);
};

export default CarPage;
