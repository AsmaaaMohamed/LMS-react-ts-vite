import { createSlice } from "@reduxjs/toolkit";
import TLoading from "@customTypes/shared";
import TPost from "@customTypes/post";
import actGetPosts from "./act/actGetPosts";
import { isString } from "@customTypes/guards";

interface IPostsState {
  posts: TPost[];
  loading: TLoading;
  error: string | null;
}
const initialState: IPostsState = {
  posts: [],
  loading: "idle",
  error: null,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actGetPosts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(actGetPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.posts = action.payload;
      })
      .addCase(actGetPosts.rejected, (state, action) => {
        state.loading = "failed";
        if (isString(action.payload))
          state.error = action.payload;
      });
  },
});
export default postsSlice.reducer;
