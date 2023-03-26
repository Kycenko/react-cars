import React, {useState} from 'react';
import styles from './ItemForm.module.scss'
import MyButton from "../UI/button/MyButton.jsx";

const ItemForm = ({setCars, create}) => {

  const [data, setData] = useState({title: '', price: '', image: ''})


  const addNewCar = (e) => {
    e.preventDefault()
    const newCar = {...data, id: Date.now()}
    create(newCar)
    setData({title: '', price: '', image: ''})
  }

  return (
    <form>
      <h1>Create new car</h1>
      <input value={data.title} onChange={(e) => setData(({...data, title: e.target.value}))} type="text"
             placeholder='Name...'/>
      <input value={data.price} onChange={(e) => setData({...data, price: e.target.value})} type="text"
             placeholder='Price...'/>
      <input value={data.image} onChange={(e) => setData({...data, image: e.target.value})} type="text"
             placeholder="image url..."/>
      <button onClick={addNewCar}>Create</button>
    </form>
  );
};

export default ItemForm;
