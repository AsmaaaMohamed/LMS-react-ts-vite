import { createSlice } from "@reduxjs/toolkit";
import TLoading from "@customTypes/shared";
import actGetSkills from "./act/actGetSkills";
import TSkill from "@customTypes/skill";
import { isString } from "@customTypes/guards";

interface ISkillsState{
    skills:TSkill[];
    loading: TLoading;
    error: string | null;
}
const initialState:ISkillsState = {
    skills:[],
    loading:"idle",
    error:null,
};
const skillsSlice = createSlice({
    name:"skills",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(actGetSkills.pending , (state)=>{
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actGetSkills.fulfilled , (state,action)=>{
            state.loading = "succeeded";
            state.skills = action.payload;
        })
        .addCase(actGetSkills.rejected , (state,action)=>{
            state.loading ="failed";
            if(isString(action.payload))
                state.error = action.payload;
        })
    }
});
export default skillsSlice.reducer;