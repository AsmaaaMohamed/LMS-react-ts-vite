import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import TSkill from "@customTypes/skill";

type TResponse = TSkill[];
const actGetSkills = createAsyncThunk("skills/actGetSkills" , async(_, thunkAPI)=>{
    const{rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TResponse>("http://localhost:3005/skills");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error))
          return rejectWithValue(error.response?.data.message || error.message);
        else
            return rejectWithValue("An unexpected error");
    }
});
export default actGetSkills;