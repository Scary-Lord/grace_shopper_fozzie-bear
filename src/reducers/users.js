import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

//thunks are your actions you call to your reducer

export const fetchUsersAsync = createAsyncThunk("allUsers", async () => {
    try {
        const { data } = await axios.get(`/api/users`);
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const login = (username, password) => async (dispatch) => {
    dispatch();
  
    try {
      const response = await axios.post('/api/users/login', { username, password });
      const token = response.data.token;
      dispatch({ payload: { token } });
    } catch (error) {
      dispatch({  payload: { error: error.response.data.error } });
    }
  };
  

export const fetchUserByID = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            // Add user to the state array
            return action.payload;
        });
        // builder.addCase(fetchUserByID.fulfilled, (state, action) => {
        //   return action.payload;
        // });
    },
});

export const selectUsers = (state) => {
    return state;
};

export default usersSlice.reducer;
