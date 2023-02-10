import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle, IArticleResponse } from '../types'
import NProgress from 'nprogress'

const BASEURL = 'https://63e12a7865b57fe6065302bd.mockapi.io/articles'

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
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
  tagTypes: ['articles'],

  endpoints: (builder) => ({
    getArticle: builder.query<IArticleResponse, string>({
      query(id) {
        return {
          url: `/${id}`,
          credentials: 'include',
        }
      },
      providesTags: (result, error, id) => [{ type: 'articles', id }],
    }),
    updateNote: builder.mutation<IArticleResponse, { id: string; isFavorited: boolean }>({
      query({ id, isFavorited }) {
        return {
          url: `/${id}`,
          method: 'PUT',
          body: {
            isFavorited: !isFavorited,
          },
        }
      },
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: 'articles', id },
              { type: 'articles', id: 'LIST' },
            ]
          : [{ type: 'articles', id: 'LIST' }],
      onQueryStarted(arg, api) {
        NProgress.start()
      },
    }),
    getAllArticles: builder.query<IArticle[], { page: number; limit: number }>({
      query({ page, limit }) {
        return {
          url: `/?page=${page}&limit=${limit}`,
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'articles' as const,
                id,
              })),
              { type: 'articles', id: 'LIST' },
            ]
          : [{ type: 'articles', id: 'LIST' }],

      onQueryStarted(arg, api) {
        NProgress.start()
      },
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetAllArticlesQuery, useUpdateNoteMutation } = articleAPI
