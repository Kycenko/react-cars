import React, {useEffect, useMemo, useState} from 'react';
import {CarService} from "/src/services/car.service";
import styles from './HomePage.module.scss'
import CarsList from "../../components/CarsList/CarsList.jsx";
import Loader from "../../components/UI/loader/Loader.jsx";
import NavBar from "../../components/Navbar/NavBar.jsx";
import MyModal from "../../components/UI/modal/MyModal.jsx";
import ItemForm from "../../components/ItemForm/ItemForm.jsx";



const HomePage = () => {
  const [cars, setCars] = useState([])
  const [isCarsLoading, setIsCarsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsCarsLoading(true)
      const data = await CarService.getAll()
      setCars(data)
      setIsCarsLoading(false)
    }
    fetchData()
  }, [])

  const searchCars = useMemo(() => {
    return cars.filter(car => car.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, cars])

  const createNewCar = (newCar) => {
    setCars([...cars, newCar])
    setModal(false)
  }

  return (
    <div>
      <MyModal visible={modal} setVisible={setModal}><ItemForm create={createNewCar}/></MyModal>
     <NavBar>
       <div><input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text"
                   placeholder='Search...'/></div>
       <div>
         <button onClick={() => setModal(true)}>AddCar</button>
       </div>
     </NavBar>
      {isCarsLoading ? <div className={styles.loader}><Loader/></div> :
        <CarsList cars={searchCars} key={cars.id}/> && searchCars.length ? <CarsList cars={searchCars} key={cars.id}/> :
          <div>Cars not found!</div>}
    </div>
  );
};

export default HomePage;
