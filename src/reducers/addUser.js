import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const addUserAsync = createAsyncThunk("addUser", async () => {
  const { data } = await axios.post("/api/user/addUser", {
    
  });
  return data;
});
const UsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {
    createUsers:(state, action) =>{ // with state you access the current value of the initialstate value
      state.value.push(action.payload);
          // we write code for adding a users
  },
  },
  extraReducers: (builder) => {
 
}});

export const selectUsers = (state) => {
  return state;
};

export default UsersSlice.reducer;
