import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import styles from './CarPage.module.scss'
import { useParams } from 'react-router-dom'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import { CarService } from '../../services/car.service.js'

const CarPage = () => {
	const { id } = useParams()
	const [car, setCar] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? car.images.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === car.images.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	const goToNextSlideDot = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await CarService.getById(id)
			setCar(data)
		}
		fetchData()
	}, [id])

	if (!car?.title)
		return (
			<div className={styles.loader}>
				<Spinner />
			</div>
		)
	return (
		<>
			<Navigation />

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
						src={`${car.images[currentIndex]}`}
						alt=""
					/>
				</div>
				<div className={styles.dotsContainer}>
					{car.images.map((slide, slideIndex) => (
						<div
							className={styles.dots}
							key={slideIndex}
							onClick={() => goToNextSlideDot(slideIndex)}
						>
							・
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default CarPage
