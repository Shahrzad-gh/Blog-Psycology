import { configureStore } from "@reduxjs/toolkit";
import postReucer from "./postSlice";

export default configureStore({
  reducer: {
    post: postReucer,
  },
});
