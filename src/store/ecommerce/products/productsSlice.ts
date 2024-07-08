import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import TLoading from "@customTypes/shared";
import TCategory from "@customTypes/category";
import { isString } from "@customTypes/guards";

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
    name:"products",
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
            if(isString(action.payload))
                state.error = action.payload;
        })
    }
});
export default productsSlice.reducer;