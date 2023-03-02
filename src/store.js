import {configureStore} from "@reduxjs/toolkit";
import usersSlice from './reducers/users';
import productSlice from './reducers/product'
import cartSlice from './reducers/cart'

const store = configureStore({
    reducer:{
        product:productSlice,
        users: usersSlice,
        cart: cartSlice
    }
})

export default store;