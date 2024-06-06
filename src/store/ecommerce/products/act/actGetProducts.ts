import { createAsyncThunk } from "@reduxjs/toolkit";
import TCourseCategory from "@customTypes/courseCategory";
import axios from "axios";

type TResponse = TCourseCategory[];
const actGetCategories = createAsyncThunk("categories/actGetCategories" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:3005/categories");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetCategories;