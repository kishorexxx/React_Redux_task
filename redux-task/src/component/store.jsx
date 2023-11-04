import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const store =  configureStore({
    reducer: {
        cart: cartReducer,//cartReducer
    },
});

export default store;