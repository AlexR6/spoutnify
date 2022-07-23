import { createSlice } from "@reduxjs/toolkit";

export const playSound = createSlice({
  name: "playSound",
  initialState: {
    isPlayed: false,
  },
  reducers: {
    setIsPlayed: (state, action) => {
      state.isPlayed = action.payload;
    },
  },
});

export const { setIsPlayed } = playSound.actions;

export default playSound.reducer;
