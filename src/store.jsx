import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice"
import colorReducer from "./Slice"
import todoReducer from "./Slice"
const store = configureStore({
    reducer:{
        counter:counterReducer,
        bgcolor:colorReducer,
        todo:todoReducer
    }
})
export default store;