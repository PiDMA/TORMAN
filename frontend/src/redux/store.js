import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/features/authSlice/authSlice'
import productReducer from '../redux/features/product/productSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
})