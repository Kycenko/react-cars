import React, { useState } from 'react'
import Navigation from '../../components/Navigation/Navigation.jsx'
import { useParams } from 'react-router-dom'
import Spinner from '../../UI/Spinner/Spinner.jsx'
import { useGetSingleCarQuery } from '../../store/carsApi.js'
import styles from './CarPage.module.scss'

const CarPage = () => {
	const { id } = useParams()
	
	const { data: car = [], isLoading } = useGetSingleCarQuery(id)
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
	
	if (isLoading) return <Spinner />
	
	return (
		<>
			<Navigation />
			<div className={styles.slideContainer}>
				<div className={styles.sliderStyle}>
					<img
						className={styles.slideStyle}
						src={`${car.images[currentIndex]}`}
						alt={car.title}
					/>
				</div>
				<div className={styles.imagesContainer}>{car.images.map(image => <div className={styles.imagesItem}
				                                                                      key={image.id}>
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
							alt={car.title}
						/>
					</div>
					<img
						src={`${image}`}
						alt={car.title} />
				</div>)}</div>
				{/*<div className={styles.dotsContainer}>*/}
				{/*	{car.images.map((slide, slideIndex) => (*/}
				{/*		<div*/}
				{/*			className={styles.dots}*/}
				{/*			key={slideIndex}*/}
				{/*			onClick={() => goToNextSlideDot(slideIndex)}*/}
				{/*		>*/}
				{/*			・*/}
				{/*		</div>*/}
				{/*	))}*/}
				{/*</div>*/}
			</div>
		</>
	)
}

export default CarPage
