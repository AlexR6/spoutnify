import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isConnected: false,
  },
  reducers: {
    login: (state, action) => {
      state.isConnected = true;
    },
    logout: (state, action) => {
      state.isConnected = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
