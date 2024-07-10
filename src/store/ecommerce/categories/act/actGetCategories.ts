import { createAsyncThunk } from "@reduxjs/toolkit";
import TCategory from "@customTypes/category";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TResponse = TCategory[];
const actGetCategories = createAsyncThunk("categories/actGetCategories" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("/productsCategories");
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});
export default actGetCategories;