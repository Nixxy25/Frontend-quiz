import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    quizs: [],
    loading:false,
    error:"",
}

export const fetchData = createAsyncThunk('data/fetchData', async () =>{
    const response = await axios.get('/src/data.json');
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
            state.error= action.error.message;
        })
    }
})



export default dataSlice.reducer;
