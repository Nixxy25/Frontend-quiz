import { configureStore } from "@reduxjs/toolkit";
import dataUser from "../reducers/dataSlice";

const store = configureStore({
    reducer:{
        app: dataUser,
    },
});

export default store;