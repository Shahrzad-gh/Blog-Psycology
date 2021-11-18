import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "users/login",
  async (loginInfo, thunkAPI) => {
    const { email, password } = loginInfo;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        { email, password }
      );
      //let data = await response.json();
      console.log(response);
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data.errors);
      }
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
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      console.log("filfilled", payload);
      state.email = payload?.rest.email;
      state.username = payload?.rest.username;
      state.isFetching = false;
      state.isSuccess = payload?.rest ? true : false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("Rejected", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.errors;
    },
    [loginUser.pending]: (state) => {
      console.log("pending");

      state.isFetching = true;
    },
  },
});

export const userSelector = (state) => state.user;

// export default authSlice.reducer;
