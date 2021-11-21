import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
  "users/login",
  async (loginInfo, thunkAPI) => {
    const { email, password } = loginInfo;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        { email, password }
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const authUser = createAsyncThunk("users/auth", async (thunkAPI) => {
  try {
    //await axios.get("http://localhost:8080/api/auth/loggedIn");
    const response = await axios.get("http://localhost:8080/api/auth/getUser");
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const logoutUser = createAsyncThunk("users/logout", async (thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/signout");
    console.log(response.data);
    window.location.reload();
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const authSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: Cookies.get("token") ? true : false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    // Reducer comes here
    clearState: (state, action) => {
      console.log("reducer", action);
      state.username = "";
      state.email = "";
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log("filfilled", payload);
      state.email = payload?.email;
      state.username = payload?.username;
      state.isFetching = false;
      state.isSuccess = payload ? true : false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("Rejected", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.errors;
    },
    [loginUser.pending]: (state) => {
      console.log("pending");
      state.isFetching = true;
    },
    [authUser.fulfilled]: (state, { payload }) => {
      console.log("filfilled", payload);
      state.email = payload.email;
      state.username = payload.username;
      state.isFetching = false;
      state.isSuccess = payload ? true : false;
      return state;
    },
    [authUser.rejected]: (state, { payload }) => {
      console.log("Rejected", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.errors;
    },
    [authUser.pending]: (state) => {
      console.log("pending");
      state.isFetching = true;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      console.log("filfilled", payload);
      state.username = null;
      state.email = null;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
  },
});
export const { clearState } = authSlice.actions;
export const userSelector = (state) => state.user;

// export default authSlice.reducer;
