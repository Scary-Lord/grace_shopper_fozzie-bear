import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/users';
import productReducer from './reducers/product'
const store = configureStore({
    reducer:{
        products:productReducer,
        users: usersReducer,
    }
})

export default store;
