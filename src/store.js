import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/users';
import productReducer from './reducers/product'
const store = configureStore({
    reducer:{
        product:productReducer,
        users: usersReducer
    }
})

export default store;