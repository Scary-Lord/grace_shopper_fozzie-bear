import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const addUserAsync = createAsyncThunk("addUser", async () => {
  const { data } = await axios.post("/api/user/addUser", {
    
  });
  return data;
});
const addUsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
 
}});

export const selectUsers = (state) => {
  return state;
};

export default usersSlice.reducer;
