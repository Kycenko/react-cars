import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carsApi = createApi({
	reducerPath: 'carsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/' }),
	endpoints: (build) => ({
		getCars: build.query({
			query: (currentPage) => `cars?_page=${currentPage}&_limit=6`
		})
	})
})
export const {useGetCarsQuery} = carsApi