import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    display_name: null,
    country: null,
    followers: 0,
    image: null,
    isConnected: false,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.id = action.payload.id;
      state.display_name = action.payload.display_name;
      state.country = action.payload.country;
      state.followers = action.payload.followers;
      state.image = action.payload.image;
      state.isConnected = action.payload.isConnected;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
