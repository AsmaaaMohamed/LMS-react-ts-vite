import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TInstructor from "@customTypes/instructor";

type TResponse = TInstructor[];
const actGetInstructors = createAsyncThunk("instructors/actGetInstructors" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:3005/instructors");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetInstructors;