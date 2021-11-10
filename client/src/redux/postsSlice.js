import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const postsFetch = createAsyncThunk("posts/postsFetch", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/post/getall");
    console.log("potsFetch", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [postsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [postsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [postsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default postsSlice.reducer;
