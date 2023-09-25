import { configureStore } from '@reduxjs/toolkit'
import { investmentOptionsApi } from './services/investmentOptions'

export const createStore = (options) => configureStore({
    reducer: {
        [investmentOptionsApi.reducerPath]: investmentOptionsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(investmentOptionsApi.middleware),
    ...options,
})

export const store = createStore()
