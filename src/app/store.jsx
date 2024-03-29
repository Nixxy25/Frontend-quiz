import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducers/dataSlice";

const store = configureStore({
    reducer:{
        data: dataSlice,
    },
});

export default store;