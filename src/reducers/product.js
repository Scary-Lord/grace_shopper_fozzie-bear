import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 


// create an async thunk to fetch all products
export const fetchProductsAsync = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await axios.get("/api/products");
    return response.data;
  }
);

// create an async thunk to fetch a product by ID
export const fetchProductByIdAsync = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`/api/products/${id}`);
    return response.data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductByIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;

