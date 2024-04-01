import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    data: [],
    loading:false,
    error:"",
}

export const fetchData = createAsyncThunk('data/fetchData', async () =>{
    const response = await axios.get('/src/data.json');
    const data = await response.json(); 
    return data;
});

const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error= "";
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error= action.error.message;
        })
    }
})

export const selectData = (state) => state.data.data;
export const selectLoading = (state) => state.data.loading;
export const selectError = (state) => state.data.error;

export default dataSlice.reducer;
