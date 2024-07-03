import { createSlice } from "@reduxjs/toolkit";
import TLoading from "@customTypes/shared";
import TInstructor from "@customTypes/instructor";
import actGetInstructors from "./act/actGetInstructors";

interface IInstructorsState{
    instructors:TInstructor[];
    loading: TLoading;
    error: string | null;
}
const initialState:IInstructorsState = {
    instructors:[],
    loading:"idle",
    error:null,
};
const instructorsSlice = createSlice({
    name:"instructors",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actGetInstructors.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetInstructors.fulfilled , (state,action)=>{
            state.loading = "succeeded";
            state.instructors = action.payload;
        })
        .addCase(actGetInstructors.rejected , (state,action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
    }
});
export default instructorsSlice.reducer;