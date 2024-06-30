import { createSlice } from "@reduxjs/toolkit";
import actGetCourses from "./act/actGetCourses";
import TLoading from "@customTypes/shared";
import TCourse from "@customTypes/course";

interface ICoursesState{
    courses:TCourse[];
    loading: TLoading;
    error: string | null;
}
const initialState:ICoursesState = {
    courses:[],
    loading:"idle",
    error:null,
};
const coursesSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actGetCourses.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetCourses.fulfilled , (state,action)=>{
            state.loading = "succeeded";
            state.courses = action.payload;
        })
        .addCase(actGetCourses.rejected , (state,action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
    }
});
export default coursesSlice.reducer;