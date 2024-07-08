import TLoading from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import { isString } from "@customTypes/guards";

interface IAuthState{
    loading: TLoading;
    error: string | null;
}
const initialState: IAuthState={
    loading:"idle",
    error: null
};
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actAuthRegister.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actAuthRegister.fulfilled , (state)=>{
            state.loading = "succeeded";
        })
        .addCase(actAuthRegister.rejected , (state,action)=>{
            state.loading ="failed";
            if(isString(action.payload))
                state.error = action.payload;
        })
    }
});
export {actAuthRegister};
export default authSlice.reducer;