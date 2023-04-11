import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carsApi = createApi({
	reducerPath: 'carsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/' }),
	endpoints: (build) => ({
		getCars: build.query({
			query: (body) =>
				body.search === ''
					? `cars?_page=${body.page}&_limit=6`
					: `cars?title_like=${body.search}`
		})
		
	})
})

export const { useGetCarsQuery, useGetCarsFilteredByNameQuery } = carsApi