import { createSlice } from "@reduxjs/toolkit";

export const trackUri = createSlice({
  name: "trackUri",
  initialState: {
    trackUri: null,
  },
  reducers: {
    setTrack: (state, action) => {
      state.trackUri = action.payload;
    },
  },
});

export const { setTrack } = trackUri.actions;

export default trackUri.reducer;
