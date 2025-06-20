/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMeta } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints( {
    endpoints: ( build ) => ( {
        createSchedule: build.mutation( {
            query: ( data ) => ( {
                url: "/schedule",
                method: "POST",
                contentType: "multipart/form-data",
                data
            } ),
            invalidatesTags: [ tagTypes.schedule ]
        } ),
        getAllchedules: build.query( {
            query: ( arg: Record<string, any> ) => ( {
                url: '/schedule',
                method: 'GET',
                params: arg,
            } ),
            transformResponse: ( response: [], meta: IMeta ) => {
                return {
                    shchedules: response,
                    meta,
                };
            },
            providesTags: [ tagTypes.schedule ],
        } ),

        deleteSchedule: build.mutation( {
            query: ( id ) => ( {
                url: `/schedule/${ id }`,
                method: "DELETE",
            } ),
            invalidatesTags: [ tagTypes.schedule ]
        } ),
    } ),
} )

export const { useCreateScheduleMutation, useGetAllchedulesQuery, useDeleteScheduleMutation } = scheduleApi