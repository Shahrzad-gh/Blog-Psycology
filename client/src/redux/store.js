import { configureStore } from "@reduxjs/toolkit";

import { postsFetch } from "./postsSlice";
import { postsApi } from "./postsApi";
import { catsApi } from "./catsApi";
import { usersApi } from "./userApi";
import { blogApi } from "./blogApi";
import { authSlice } from "./authSlice";
import { blogSlice } from "./blogSlice";
export const store = configureStore({
  reducer: {
    //posts: postsReducer,
    //auth: authReducer,
    user: authSlice.reducer,
    blog: blogSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [catsApi.reducerPath]: catsApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(catsApi.middleware)
      .concat(usersApi.middleware)
      .concat(blogApi.middleware),
});

store.dispatch(postsFetch());
//setupListeners.apply(store.dispatch);
