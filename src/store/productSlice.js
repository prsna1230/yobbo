import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAxiosWithTokenObj from "../authorizedRequest/AxiosReqWithToken";
// add product
export const addProduct = createAsyncThunk(
  "addProduct",
  async (formData, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.post(
      "/product/addproduct",
      formData
    );

    if (data.data.message === "New Product Added") {
      return data.data.payload;
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);
const reducerPending = (state) => {
  return (state = { ...state, isLoading: true, invalidMessage: "" });
};

const reducerRejected = (state, action) => {
  return (state = {
    ...state,
    isLoading: false,
    invalidMessage: action.payload.message,
  });
};

const productSlice = createSlice({
  name: "productpackage",
  initialState: {
    productobj: [],
    isSuccess: false,
    isLoading: false,
    invalidMessage: "",
  },
  reducers: {},
  extraReducers: {
    //   add holiday
    [addProduct.pending]: reducerPending,
    [addProduct.fulfilled]: (state, action) => {
      state.productobj.push(action.payload);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [addProduct.rejected]: reducerRejected,
  },
});

export default productSlice.reducer;
