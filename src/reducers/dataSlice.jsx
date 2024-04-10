import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuizs = createAsyncThunk("dataUsers", async (args, {rejectWithValue}) => {
    const response = await fetch("/data.json");
    try{
        const result = response.json(); 
        return result;
    } catch(error){
        return rejectWithValue('opps found an error')
    }
  });

export const dataUser = createSlice({
    name:'dataUser',
    initialState:{
        users: [],
        loading:false,
        error:null,
    },
    extraReducers: (builders) => {
        builders.addCase(fetchQuizs.pending, (state) => {
            state.loading = true;
        })
        builders.addCase(fetchQuizs.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        builders.addCase(fetchQuizs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default dataUser.reducer;
