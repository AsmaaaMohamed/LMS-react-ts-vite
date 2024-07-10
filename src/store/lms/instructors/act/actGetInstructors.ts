import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TInstructor from "@customTypes/instructor";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TResponse = TInstructor[];
const actGetInstructors = createAsyncThunk("instructors/actGetInstructors" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("/instructors");
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});
export default actGetInstructors;