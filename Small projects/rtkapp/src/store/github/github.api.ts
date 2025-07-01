import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRepo, IUser, ServerResponce } from '../../models/models'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (responce: ServerResponce<IUser>) => responce.items,
    }),
    getUserProps: build.query<IRepo[], any>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
})

export const { useSearchUsersQuery, useLazyGetUserPropsQuery } = githubApi
