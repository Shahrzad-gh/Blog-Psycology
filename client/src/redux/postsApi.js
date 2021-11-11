// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/post",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `getall`,
    }),
    getPost: builder.query({
      query: (id) => `get/${id}`,
    }),
    addPost: builder.mutation({
      query: (user) => ({
        url: `add`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery, useGetPostQuery, useAddPostMutation } =
  postsApi;
