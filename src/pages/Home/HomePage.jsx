import React, {useEffect, useState} from 'react';
import {CarService} from "/src/services/car.service";
import CarsItem from "../../components/CarsItem/CarsItem.jsx";
import styles from './HomePage.module.scss'


const HomePage = () => {
  const [cars, setCars] = useState([])
  const [isCarsLoading, setIsCarsLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()
      setCars(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Cars catalog</h1>
      {/*<ItemForm setCars={setCars}/>*/}
      {cars.map(car => <CarsItem car={car} key={car.id}/>)}
    </div>
  );
};

export default HomePage;
