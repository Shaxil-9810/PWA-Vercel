import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "../actions/UserActions";

const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {},
  error: false,
};
const setItemLocaStorage = (key, value) => {
  console.log("KEY", key);
  console.log("VALUE", value);
  localStorage.setItem(key, JSON.stringify(value));
};
export const authReducer = createSlice({
  name: "UserSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoggedIn = false;
      state.loading = true;
    });

  },
});