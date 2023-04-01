import React, { useEffect, useMemo, useState } from "react";
import styles from "./HomePage.module.scss";
import CarsList from "../../components/CarsList/CarsList.jsx";
import Loader from "../../components/UI/loader/Loader.jsx";
import { CarService } from "../../services/car.service.js";
import NavBar from "../../components/Navbar/NavBar.jsx";
import { BsSearch } from "react-icons/bs";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/filterSlice.js";

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setIsCarsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const { currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsCarsLoading(true);
      const data = await CarService.getAll(currentPage);
      setCars(data);
      setIsCarsLoading(false);
    };
    window.scroll(0, 0);
    fetchData();
  }, [currentPage]);

  const searchCars = useMemo(() => {
    return cars.filter((car) =>
      car.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, cars]);

  const createNewCar = (newCar) => {
    setCars([...cars, newCar]);
    setModal(false);
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  return (
    <>
      <NavBar />
      <div className={styles.container}>
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
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
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
