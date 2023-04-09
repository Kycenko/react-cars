import React, { useState } from 'react'
import NavBar from '../../components/Navbar/NavBar.jsx'
import styles from './CarPage.module.scss'

const CarPage = () => {
	//const { id } = useParams()
	//const [car, setCar] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	const goToNextSlideDot = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}

	const slides = [
		{
			url: 'https://www.bentleymotors.com/content/dam/bentley/Master/homepage%20carousel/1920x1080_bentayga_ewb_2.jpg/_jcr_content/renditions/original.image_file.700.394.file/1920x1080_bentayga_ewb_2.jpg'
		},
		{
			url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80'
		}
	]

	/*useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://localhost:4200/cars')
      setCar(data)
    }
    fetchData()
  }, [])

	useEffect(() => {
	  if (!id) return;
	  const fetchData = async () => {
	    const data = await CarService.getById(id);
	    setCar(data);
	  };
	  fetchData();
	}, [id]);

	if (!car?.title)
	  return (
	    <div className={styles.loader}>
	      <Loader />
	    </div>
	  );*/
	return (
		<>
			<NavBar />
			<div className={styles.slideContainer}>
				<div className={styles.sliderStyle}>
					<div onClick={prevSlide} className={styles.leftArrow}>
						←
					</div>
					<div onClick={nextSlide} className={styles.rightArrow}>
						→
					</div>
					<img
						className={styles.slideStyle}
						src={`${slides[currentIndex].url}`}
						alt=""
					/>
					))}
				</div>
				<div className={styles.dotsContainer}>
					{slides.map((slide, slideIndex) => (
						<div key={slideIndex} onClick={() => goToNextSlideDot(slideIndex)}>
							・
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default CarPage
