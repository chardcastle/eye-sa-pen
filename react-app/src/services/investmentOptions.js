import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const investmentOptionsApi = createApi({
    reducerPath: 'investmentOptionsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/',
        prepareHeaders: () => {
            // Set authentication header and return headers
        },
    }),
    endpoints: (builder) => ({
        getOptions: builder.query({
            query: () => 'investment-options',
        }),
        postFund: builder.mutation({
            query: (form) => ({
                url: 'fund-applications',
                method: "post",
                body: form,
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                }
            }),
        }),
        listFundApplicationsById: builder.query({
            // query: (fundId) => `investment-options/${fundId}?_embed=fund-applications&_sort=id&_order=desc`
            query: (fundId) => `fund-applications?investment-optionId_like=${fundId}&_sort=id&_order=desc`
        })
    }),
})

// Export hooks for usage in functional components
export const { useGetOptionsQuery, usePostFundMutation, useListFundApplicationsByIdQuery } = investmentOptionsApi
