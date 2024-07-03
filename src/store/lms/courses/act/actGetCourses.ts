import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TCourse from "@customTypes/course";


type TResponse = TCourse[];
const actGetCourses = createAsyncThunk("courses/actGetCourses" , async(selectedCategory, thunkAPI)=>{
    const apiFilter = selectedCategory === "All Categories" ? "" : `?category_like=${selectedCategory}`;
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>(`http://localhost:3005/courses${apiFilter}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetCourses;