import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import trackUri from "./trackUri";
import playSound from "./playSound";

export default configureStore({
  reducer: {
    user,
    trackUri,
    playSound,
  },
});
