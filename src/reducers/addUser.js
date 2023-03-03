import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};
export const addUserAsync = createAsyncThunk("addUser", async () => {
  const { data } = await axios.post("/api/user/addUser", {
    
  });
  return data;
});
const UsersSlice = createSlice({
  name: "addUsers",
  initialState,
  reducers: {
    createUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
 
}});

export const selectUsers = (state) => {
  return state.users;
};

export const {createUsers} = UsersSlice.actions
export default UsersSlice.reducer;
