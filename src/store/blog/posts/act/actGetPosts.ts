import { createAsyncThunk } from "@reduxjs/toolkit";
import TPost from "@customTypes/post";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TResponse = TPost[];
const actGetPosts = createAsyncThunk(
  "posts/actGetPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "/posts"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetPosts;
