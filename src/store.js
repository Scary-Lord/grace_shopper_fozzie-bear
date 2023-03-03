import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/users';
import productReducer from './reducers/product'
import singleProductReducer from './reducers/singleProduct'
const store = configureStore({
    reducer:{
        products:productReducer,
        users: usersReducer,
        singleProduct:singleProductReducer,
    }
})

export default store;
