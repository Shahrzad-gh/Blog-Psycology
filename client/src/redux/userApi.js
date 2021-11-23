// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/user",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (search) => ({ url: `getall/${search}` }),
    }),
    getUserById: builder.query({
      query: (id) => `get/${id}`,
    }),
    getUserByUsername: builder.query({
      query: (username) => ({
        url: `get/`,
        body: username,
      }),
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: `add`,
        method: "POST",
        body: user,
      }),
    }),
    editUser: builder.mutation({
      query: ({ username, userData }) => ({
        url: `edit/${username}`,
        method: "PUT",
        body: userData,
      }),
    }),
    deleteUser: builder.mutation({
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
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserByUsernameQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = usersApi;
