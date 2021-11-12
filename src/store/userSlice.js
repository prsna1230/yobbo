import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { encrypt } from "../authorizedRequest/EncriptionDecription";
const reducerPending = (state) => {
  return (state = {
    ...state,
    isLoading: true,
  });
};
const reducerRejected = (state, action) => {
  return (state = {
    ...state,
    isError: true,
    isLoading: false,
    message: action.payload.message,
  });
};
// Login Thunk
export const userLogin = createAsyncThunk(
  "loginUser",
  async (userCredentialObj, thunkAPI) => {
    let data;
    // encrypt userCredential
    let encryptedUser = encrypt(userCredentialObj);
    let response;
    if (userCredentialObj.type === "Admin") {
      response = await axios.post("/admin/login", {
        adminCredential: encryptedUser,
      });
    } else {
      response = await axios.post("/users/login", {
        userCredential: encryptedUser,
      });
    }
    data = response.data;
    // After Successful response
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      let encrypedUserObj = encrypt(data.user);
      localStorage.setItem("userObj", encrypedUserObj);
      return data;
    }
    if (
      data.message === "Invalid Password" ||
      data.message === "Invalid Email"
    ) {
      // it will provide data to rejected state
      return thunkAPI.rejectWithValue(data);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: {},
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {
    clearLoginState: (state) => {
      state.isSuccess = false;
      state.userObj = {};
      return state;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state = Object.assign(state, {
        userObj: action.payload.user,
        isSuccess: true,
        isLoading: false,
        message: "fulfilled",
        isError: false,
      });
    },
    [userLogin.pending]: reducerPending,
    [userLogin.rejected]: reducerRejected,
  },
});
export const { clearLoginState } = userSlice.actions;
export default userSlice.reducer;
