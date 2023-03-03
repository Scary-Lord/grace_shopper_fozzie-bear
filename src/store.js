import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/users';
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
const store = configureStore({
    reducer:{
        products:productReducer,
        users: usersReducer,
        cart: cartReducer
    }
})

export default store;
