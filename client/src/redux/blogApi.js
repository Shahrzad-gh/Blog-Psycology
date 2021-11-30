import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/blog",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: (id) => `get/${id}`,
    }),
    editBlog: builder.mutation({
      query: ({ siteData }) => ({
        url: `edit`,
        method: "PUT",
        body: siteData,
      }),
    }),
  }),
});

export const { useGetBlogQuery, useEditBlogMutation } = blogApi;
