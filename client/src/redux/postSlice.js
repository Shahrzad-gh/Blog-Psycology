import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    data: {},
  },
  reducers: {
    getPost: async (state) => {
      const res = await axios.get("/post/getall");
      console.log(res);
    },
    addPost: (state) => {},
    removPost: (state) => {},
    editPost: (state, action) => {},
  },
});

export const { getPost, addPost, removPost, editPost } = postSlice.actions;

export default postSlice.reducer;
