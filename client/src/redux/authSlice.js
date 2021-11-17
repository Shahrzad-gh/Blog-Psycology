import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "users/login",
  async (loginInfo, thunkAPI) => {
    console.log("e", loginInfo);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        loginInfo
      );
      let data = await response.json();
      console.log("response", data);
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },

  extraReducers: {
    // Extra reducer comes here
    // [signupUser.fulfilled]: (state, { payload }) => {
    //   state.isFetching = false;
    //   state.isSuccess = true;
    //   state.email = payload.user.email;
    //   state.username = payload.user.name;
    // },
    // [signupUser.pending]: (state) => {
    //   state.isFetching = true;
    // },
    // [signupUser.rejected]: (state, { payload }) => {
    //   state.isFetching = false;
    //   state.isError = true;
    //   state.errorMessage = payload.message;
    // },
  },
});

export const userSelector = (state) => state.user;

// export default authSlice.reducer;
