import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TSkill from "@customTypes/skill";
import axiosErrorHandler from "@utils/axiosErrorHandler";

type TResponse = TSkill[];
const actGetSkills = createAsyncThunk("skills/actGetSkills" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:3005/skills");
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});
export default actGetSkills;