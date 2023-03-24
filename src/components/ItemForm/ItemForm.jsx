import React, {useState} from 'react';
import styles from './ItemForm.module.scss'
import MyButton from "../UI/button/MyButton.jsx";

const ItemForm = ({setCars}) => {
	
	const [data, setData] = useState({title: '', price: '', image: ''})
	
	
	const addNewCar = (e) => {
		e.preventDefault()
		setCars(prev => [{id: prev.length + 1, ...data}, ...prev])
		setData({title: '', price: '', image: ''})
	}
	
	return (
		<form>
			<input value={data.title} onChange={(e) => setData(prev => ({...prev, title: e.target.value}))} type="text"
			       placeholder='Name...'/>
			<input value={data.price} onChange={(e) => setData(prev => ({...prev, price: e.target.value}))} type="text"
			       placeholder='Price...'/>
			<input value={data.image} onChange={(e) => setData(prev => ({...prev, image: e.target.value}))} type="text"
			       placeholder="image url..."/>
			<button onClick={addNewCar}>Create</button>
		</form>
	);
};

export default ItemForm;
