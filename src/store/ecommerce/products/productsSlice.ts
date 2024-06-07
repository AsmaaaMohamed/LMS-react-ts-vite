import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import TLoading from "@customTypes/shared";
import TCategory from "@customTypes/category";

interface IProductsState{
    records:TCategory[];
    loading: TLoading;
    error: string | null;
}
const initialState:IProductsState = {
    records:[],
    loading:"idle",
    error:null,
};
const productsSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actGetProducts.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetProducts.fulfilled , (state,action)=>{
            state.loading = "succeeded";
            state.records = action.payload;
        })
        .addCase(actGetProducts.rejected , (state,action)=>{
            state.loading ="failed";
            if(action.payload && typeof action.payload === "string")
                state.error = action.payload;
        })
    }
});
export default productsSlice.reducer;