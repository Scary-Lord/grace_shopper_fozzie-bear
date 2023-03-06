import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductByIdAsync = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {

    try{const {data} = await axios.get(`/api/products/${id}`);
    console.log(data)
    return data;
  }catch(err){
    console.log(err)
  }
  }
);

const initialState=[];

const singleProductSlice =createSlice({
  name:'singleProduct',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchProductByIdAsync.fulfilled,(state,action)=>{
      return action.payload;
    })
  }
})

export const selectProduct = (state)=>{ return state.singleProduct;};

export default singleProductSlice.reducer;
