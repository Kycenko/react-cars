import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carsApi = createApi({
	reducerPath: 'carsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200' }),
	endpoints: (build) => ({
		getCars: build.query({
			query: (body) =>
				body.search === ''
					? `/cars?category_like=${body.category}&_page=${body.page}&_limit=6`
					: `/cars?title_like=${body.search}&_limit=6`
		}),
		getCategory: build.query({
			query: () => '/categories'
		}),
		getSingleCar: build.query({
			query: (id) => `/cars/${id}`
		})
	})
})

export const { useGetCarsQuery, useGetCategoryQuery, useGetSingleCarQuery } = carsApi