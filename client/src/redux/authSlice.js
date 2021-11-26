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
    photo: "",
    isFetching: false,
    isSuccess: Cookies.get("token") ? true : false,
    isError: false,
    errorMessage: "",
    description: "",
    role: "",
  },
  reducers: {
    // Reducer comes here
    clearState: (state, action) => {
      state.username = "";
      state.email = "";
      state.photo = "";
      state.isFetching = false;
      state.isSuccess = false;
      state.role = "";
      state.isError = false;
      state.errorMessage = "";
      state.description = "";

      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.email = payload?.email;
      state.username = payload?.username;
      state.role = payload?.role;
      state.isFetching = false;
      state.photo = payload?.photo;
      state.isSuccess = payload ? true : false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.errors;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [authUser.fulfilled]: (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.username;
      state.photo = payload.photo;
      state.description = payload.description;
      state.role = payload.role;
      state.isFetching = false;
      state.isSuccess = payload ? true : false;
      return state;
    },
    [authUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.errors;
    },
    [authUser.pending]: (state) => {
      state.isFetching = true;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.username = null;
      state.email = null;
      state.role = null;
      state.phoot = null;
      state.description = null;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
  },
});
export const { clearState } = authSlice.actions;
export const userSelector = (state) => state.user;

// export default authSlice.reducer;
