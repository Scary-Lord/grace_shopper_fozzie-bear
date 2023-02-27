import {configureStore} from "@reduxjs/toolkit";
import usersSlice from './reducers/users';
import productSlice from './reducers/product'
const store = configureStore({
    reducer:{
        product:productSlice,
        users: usersSlice
    }
})

export default store;