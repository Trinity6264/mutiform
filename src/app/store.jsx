import { configureStore } from "@reduxjs/toolkit";
import CurrentIndexSlice from "../feature/CurrentIndexSlice";



export const store = configureStore({
    reducer:{
        index: CurrentIndexSlice
    }
})