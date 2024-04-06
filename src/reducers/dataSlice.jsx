import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    quizs: [],
    loading:false,
    error:null,
}

export const fetchQuizs = createAsyncThunk('data/fetchData', async () =>{
    const response = await axios.get('../data.json');
    const data = await response.json(); 
    return data;
    
  });

const dataSlice = createSlice({
    name:'quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuizs.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchQuizs.fulfilled, (state, action) => {
            state.loading = false;
            state.quizs = action.payload;
            state.error= "";
        })
        builder.addCase(fetchQuizs.rejected, (state, action) => {
            state.loading = false;
            state.quizs = [];
            state.error= action.payload;
        })
    }
})



export default dataSlice.reducer;
