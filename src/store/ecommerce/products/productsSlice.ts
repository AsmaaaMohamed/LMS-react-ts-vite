import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetProducts";
import TLoading from "@customTypes/shared";
import TCourseCategory from "@customTypes/courseCategory";

interface ICategoriesState{
    records:TCourseCategory[];
    loading: TLoading;
    error: string | null;
}
const initialState:ICategoriesState = {
    records:[],
    loading:"idle",
    error:null,
};
const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actGetCategories.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetCategories.fulfilled , (state,action)=>{
            state.loading = "succeeded";
            state.records = action.payload;
        })
        .addCase(actGetCategories.rejected , (state,action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
    }
});
export default categoriesSlice.reducer;