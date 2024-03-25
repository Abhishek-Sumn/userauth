"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loggedInuserEmail: "",
  loggedInuserPs: "",
  usersList: [],
  token: "",
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupuser(state, action) {
      state.loggedInuserEmail = action.payload.email;
      state.loggedInuserPs = action.payload.ps;
      state.usersList = [...state.usersList, action.payload];
      state.loading = true;
    },
    login: (state, action) => {
      state.loading = true;
      state.usersList = action.payload;
    },
    logout: (state) => {
      state.loggedInuserEmail = "";
      state.loggedInuserPs = "";
      state.loading = false;
    },
  },
});
export const { signupuser, login ,logout } = authSlice.actions;
export default authSlice.reducer;
