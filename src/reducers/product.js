import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action creator to fetch all products
export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const response = await axios.get("api/products");
        dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};

// action creator to fetch product by ID
export const fetchProductByID = (id) => async (dispatch) => {
    try {
        dispatch(fetchProductsStart());
        const response = await axios.get("api/products/${id}");
        dispatch (fetchProductsSuccess(response.data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message))
    }
};

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
        },
        fetchProductsSuccess(state, action) {
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        fetchProductSuccess(state, action) {
            state.product = action.payload;
            state.loading = false;
        }
        
    }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductSucess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
