import TLoading from "@customTypes/shared";
import actAuthRegister from "./act/actAuthRegister";
import { isString } from "@customTypes/guards";
import actAuthLogin from "./act/actAuthLogin";
import { createSlice } from "@reduxjs/toolkit";

interface IAuthState{
    user:{
        username:string;
        email:string;
        id:number;
    } | null;
    accessToken:string | null;
    loading: TLoading;
    error: string | null;
}
const initialState: IAuthState={
    user:null,
    accessToken:null,
    loading:"idle",
    error: null
};
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        resetErrorMessages(state){
            state.loading="idle";
            state.error = null;
        }
    },
    extraReducers:(builder) => {
        builder
          .addCase(actAuthRegister.pending, (state) => {
            state.loading = "pending";
            state.error = null;
          })
          .addCase(actAuthRegister.fulfilled, (state) => {
            state.loading = "succeeded";
            state.error = null;
          })
          .addCase(actAuthRegister.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) state.error = action.payload;
          })

          //////////Login
          .addCase(actAuthLogin.pending, (state) => {
            state.loading = "pending";
            state.error = null;
          })
          .addCase(actAuthLogin.fulfilled, (state,action) => {
            state.loading = "succeeded";
            if (isString(action.payload))  state.accessToken = action.payload;
            state.user = action.payload.user;
          })
          .addCase(actAuthLogin.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) state.error = action.payload;
          });
    }
});
export {actAuthRegister , actAuthLogin};
export const { resetErrorMessages } = authSlice.actions;
export default authSlice.reducer;