import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actAuthRegister = createAsyncThunk(
    "auth/actAuthRegister" ,
    async( formData , thunk)=>{
        const {rejectWithValue} = thunk;
        try{
            const res = await axios.post("/register" , formData);
            return res;
        }catch(error){
            return rejectWithValue(axiosErrorHandler(error));
        }
});
export default actAuthRegister;