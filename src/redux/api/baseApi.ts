// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypeLists } from '../tag-types'

export const baseApi = createApi( {
    reducerPath: 'api',
    baseQuery: axiosBaseQuery( { baseUrl: 'http://localhost:5000/api/v1' } ),
    endpoints: () => ( {} ),
    tagTypes: tagTypeLists
} )

