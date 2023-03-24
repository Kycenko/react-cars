import React, {useEffect, useState} from 'react';
import Item from "../Item/Item.jsx";
import {cars as carsData} from "../../db.js";
import styles from './CartItem.module.scss'
import ItemForm from "../ItemForm/ItemForm.jsx";
import axios from "axios";

const CartItem = () => {
	const [cars, setCars] = useState(carsData)
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://6364a48f7b209ece0f4a59ab.mockapi.io/cars')
			setCars(response.data)
		}
		fetchData()
	}, [])
	
	return (
		<div>
			<ItemForm setCars={setCars}/>
			<h1>Cars</h1>
			{cars.map(car => <Item car={car} key={car.id}/>)}
		</div>
	);
};

export default CartItem;
