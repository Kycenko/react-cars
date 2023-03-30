import React, { useEffect, useMemo, useState } from "react";
import styles from "./HomePage.module.scss";
import CarsList from "../../components/CarsList/CarsList.jsx";
import Loader from "../../components/UI/loader/Loader.jsx";
import { CarService } from "../../services/car.service.js";
import NavBar from "../../components/Navbar/NavBar.jsx";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setIsCarsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsCarsLoading(true);
      const data = await CarService.getAll();
      setCars(data);
      setIsCarsLoading(false);
    };
    fetchData();
  }, []);

  const searchCars = useMemo(() => {
    return cars.filter((car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, cars]);

  const createNewCar = (newCar) => {
    setCars([...cars, newCar]);
    setModal(false);
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <input
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search..."
        />

        {isCarsLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : <CarsList cars={searchCars} key={cars.id} /> &&
          searchCars.length ? (
          <CarsList cars={searchCars} key={cars.id} />
        ) : (
          <div className={styles.notFound}>Cars not found!</div>
        )}
      </div>
      {/*<MyModal visible={modal} setVisible={setModal}>*/}
      {/*  <CreateCarForm create={createNewCar} />*/}
      {/*</MyModal>*/}
      {/*<div>*/}
      {/*  <button onClick={() => setModal(true)}>AddCar</button>*/}
      {/*</div>*/}
    </>
  );
};

export default HomePage;
