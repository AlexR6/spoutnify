import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    display_name: null,
    country: null,
    followers: 0,
    image: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.display_name = action.payload.display_name;
      state.country = action.payload.country;
      state.followers = action.payload.followers;
      state.image = action.payload.image;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
