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
      query: (search) => ({ url: `getall/${search}` }),
    }),
    getPostById: builder.query({
      query: (id) => `get/${id}`,
    }),
    getPostsByCat: builder.query({
      query: (cat) => `getall?cat=${cat}`,
    }),
    getPostsByUsername: builder.query({
      query: (username) => `getall?user=${username}`,
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
      query: (id) => ({
        url: `remove/${id}`,
        method: "Delete",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByCatQuery,
  useGetPostsByUsernameQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postsApi;
