import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BlogInfo = createAsyncThunk("blog/info", async (thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8080/api/blog/get");
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    id: "",
    instagram: "",
    facebook: "",
    twitter: "",
    about: "",
    name: "",
    title: "",
    subTitle: "",
    headerPhoto: "",
    aboutPhoto: "",
    isSuccess: false,
    isFetching: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    [BlogInfo.fulfilled]: (state, { payload }) => {
      state.isSuccess = payload ? true : false;
      state.isFetching = false;
      state.id = payload._id;
      state.headerPhoto = payload.headerPhoto.img;
      state.aboutPhoto = payload.aboutPhoto.img;
      state.instagram = payload.socialLinks?.instagram;
      state.facebook = payload.socialLinks?.facebook;
      state.twitter = payload.socialLinks?.twitter;
      state.about = payload.about;
      state.name = payload.name;
      state.title = payload.title;
      state.subTitle = payload.subTitle;
      return state;
    },
    [BlogInfo.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.errors;
    },
    [BlogInfo.pending]: (state) => {
      state.isFetching = true;
    },
  },
});
// export const { clearState } = blogSlice.actions;
export const blogSelector = (state) => state.blog;

export default blogSlice.reducer;
