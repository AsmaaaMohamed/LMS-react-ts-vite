import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TCourse from "@customTypes/course";


type TResponse = TCourse[];
const actGetCourses = createAsyncThunk("courses/actGetCourses" , async({category,price}, thunkAPI)=>{
    const categoryFilter = category === "All Categories" ? "" : `category_like=${category}`;
    const priceFilter = price === "All Prices" ?"" : `price=${price}`;
    const{rejectWithValue} = thunkAPI;
    let apiFilter = categoryFilter + priceFilter;
    if(categoryFilter && priceFilter){
        apiFilter = categoryFilter + "&&" + priceFilter;
    }
    console.log(apiFilter)
    try {
        const response = await axios.get<TResponse>(`http://localhost:3005/courses?${apiFilter}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetCourses;