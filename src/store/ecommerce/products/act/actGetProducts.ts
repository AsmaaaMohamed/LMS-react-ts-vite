import { createAsyncThunk } from "@reduxjs/toolkit";
import TCategory from "@customTypes/category";
import axios from "axios";

type TResponse = TCategory[];
const actGetProducts = createAsyncThunk("products/actGetProducts" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:3005/products");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetProducts;