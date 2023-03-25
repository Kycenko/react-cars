import React, {useEffect, useState} from 'react';
import {CarService} from "/src/services/car.service";
import styles from './HomePage.module.scss'
import CarsList from "../../components/CarsList/CarsList.jsx";
import Loader from "../../components/UI/loader/Loader.jsx";
import NavBar from "../../components/Navbar/NavBar.jsx";



const HomePage = () => {
  const [cars, setCars] = useState([])
  const [isCarsLoading, setIsCarsLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setIsCarsLoading(true)
      const data = await CarService.getAll()
      setCars(data)
      setIsCarsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <NavBar/>
      <h1>Cars catalog</h1>
      {isCarsLoading ? <div className={styles.loader}><Loader/></div> : <CarsList cars={cars} key={cars.id}/>}
    </div>
  );
};

export default HomePage;
