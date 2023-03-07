import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchKeyboardAsync = createAsyncThunk(
    "keyboard",
    async (category) => {
        try {
            const { data } = await axios.get(`/api/${category}`);
            return data;
        } catch (err) {
            console.log(err)
        }
    }
);

const initialState = [];

const keyboardSlice = createSlice({
    name: "keyboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchKeyboardAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const { setSelectedProduct } = keyboardSlice.actions;

export default keyboardSlice.reducer;