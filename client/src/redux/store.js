import { configureStore } from "@reduxjs/toolkit";

import { postsFetch } from "./postsSlice";
import { postsApi } from "./postsApi";
import { catsApi } from "./catsApi";
import { usersApi } from "./userApi";
import { authSlice } from "./authSlice";
export const store = configureStore({
  reducer: {
    //posts: postsReducer,
    //auth: authReducer,
    user: authSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(catsApi.middleware)
      .concat(usersApi.middleware),
});

store.dispatch(postsFetch());
//setupListeners.apply(store.dispatch);
