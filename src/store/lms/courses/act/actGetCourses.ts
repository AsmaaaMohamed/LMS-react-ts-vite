import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TCourse from "@customTypes/course";
import axiosErrorHandler from "@utils/axiosErrorHandler";


type TResponse = TCourse[];
const actGetCourses = createAsyncThunk("courses/actGetCourses" , async({category,price,course}, thunkAPI)=>{
    const categoryFilter = category === "All Categories" ? "" : `category_like=${category}`;
    const priceFilter = price === "All Prices" ?"" : `price=${price}`;
    const courseNameFilter = course === ""? "": `title_like=${course}`; 
    const{rejectWithValue} = thunkAPI;
    const apiFilter = [categoryFilter , priceFilter , courseNameFilter].filter(Boolean).join(' && ')
    console.log(apiFilter)
    try {
        const response = await axios.get<TResponse>(`/courses?${apiFilter}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});
export default actGetCourses;