import { createAsyncThunk } from "@reduxjs/toolkit";
import TPost from "@customTypes/post";
import axios from "axios";

type TResponse = TPost[];
const actGetPosts = createAsyncThunk(
  "posts/actGetPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:3005/posts"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return rejectWithValue(error.response?.data.message || error.message);
      else return rejectWithValue("An unexpected error");
    }
  }
);
export default actGetPosts;
