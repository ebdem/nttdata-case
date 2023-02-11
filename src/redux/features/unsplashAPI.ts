import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../types'
import NProgress from 'nprogress'

const BASEURL = 'https://api.unsplash.com/search'

export const unsplashAPI = createApi({
  reducerPath: 'unsplashAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*')
      headers.set('Access-Control-Allow-Methods', 'GET') //
      headers.set('Access-Control-Allow-Headers', '*') //
      return headers
    },
  }),
  tagTypes: ['unsplash'],

  endpoints: (builder) => ({
    getRandomPhoto: builder.query<any, { page: number; limit: number }>({
      query({ page, limit, query }: any) {
        return {
          url: `/photos?client_id=${
            import.meta.env.VITE_KEY
          }&page=${page}&limit=${limit}&query=${query}`,
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }: any) => ({
                type: 'unsplash' as const,
                id,
              })),
              { type: 'unsplash', id: 'LIST' },
            ]
          : [{ type: 'unsplash', id: 'LIST' }],

      onQueryStarted(arg, api) {
        console.log('onQueryStarted', arg, api)
        NProgress.start()
      },
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetRandomPhotoQuery } = unsplashAPI
