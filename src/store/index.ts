import { configureStore } from "@reduxjs/toolkit";
import coursesCategoriesReducer from "@store/lms/categories/categoriesSlice";
import coursesReducer from "@store/lms/courses/coursesSlice";

export const store = configureStore({
  reducer: {
    coursesCategories: coursesCategoriesReducer,
    courses: coursesReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// To insure that state name is exist useSelector(state=>state.name) it will give suggestion for after write dot
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// To ensure that the action is written right
export type AppDispatch = typeof store.dispatch;
export default store;