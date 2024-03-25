import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./app/components/redux/authSlice";
import postSlice from "./app/components/redux/postSlice";

const store = configureStore({
  reducer: {
    users:authSlice,
  }
});

export default store;
