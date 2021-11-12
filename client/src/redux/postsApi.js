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
      query: (post) => ({
        url: `add`,
        method: "POST",
        body: post,
      }),
    }),
    editPost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `edit/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deletePost: builder.mutation({
      query: (post) => ({
        url: `remove/${post.id}`,
        method: "Delete",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postsApi;
