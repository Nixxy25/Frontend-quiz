import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducers/dataSlice";

const store = configureStore({
    reducer:{
        user: dataReducer,
    },
});

export default store