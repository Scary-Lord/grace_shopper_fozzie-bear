import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './reducers/users';
import productReducer from './reducers/product'
import cartReducer from './reducers/cart'
import singleProductReducer from './reducers/singleProduct'
import keyboardReducer from './reducers/keyboard'
const store = configureStore({
    reducer:{
        products:productReducer,
        users: usersReducer,
        cart: cartReducer,
        singleProduct:singleProductReducer,
        keyboard:keyboardReducer

    }
})

export default store;
