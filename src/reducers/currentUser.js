import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

//thunks are your actions you call to your reducer


export const fetchUserByUsername = createAsyncThunk('users/fetchUserByUsername', async (username) => {
  try {
    // console.log(username)
    const { data } = await axios.get(`/api/users/username/${username}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const currentUsersSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
          return action.payload;
        });
    },
});

export const selectCurrentUsers = (state) => {
    return state;
};

export default currentUsersSlice.reducer;
