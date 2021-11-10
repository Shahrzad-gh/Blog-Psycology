import { configureStore } from "@reduxjs/toolkit";

import postsReducer, { postsFetch } from "./postsSlice";
import { postsApi } from "./postsApi";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

store.dispatch(postsFetch());
