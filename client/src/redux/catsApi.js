// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const catsApi = createApi({
  reducerPath: "catsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/category",
  }),
  endpoints: (builder) => ({
    getAllCats: builder.query({
      query: () => `getall`,
    }),
    getCat: builder.query({
      query: (id) => `get/${id}`,
    }),
    addCat: builder.mutation({
      query: (cat) => ({
        url: `add`,
        method: "POST",
        body: cat,
      }),
    }),
    // editCat: builder.mutation({
    //   query: ({ id, ...rest }) => ({
    //     url: `edit/${id}`,
    //     method: "PUT",
    //     body: rest,
    //   }),
    // }),
    // deleteCat: builder.mutation({
    //   query: (cat) => ({
    //     url: `remove/${cat.id}`,
    //     method: "Delete",
    //   }),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllCatsQuery,
  useGetCatQuery,
  useAddCatMutation,
  // useEditCatMutation,
  // useDeleteCatMutation,
} = catsApi;
