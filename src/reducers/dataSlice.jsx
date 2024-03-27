import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState ={
    quizzes:null,
    loading:false,
    error:"",
}

export const fetchData = createAsyncThunk('data/fetchData', async () =>{
    const response = await fetch ('/src/data.json');
    const data = await response.json();
    return data.quizzes;
})

const dataSlice = createSlice({
    name:'quizzes',
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

export default dataSlice.reducer;