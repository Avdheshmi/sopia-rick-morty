import { configureStore } from "@reduxjs/toolkit";
import likedReducer from "./Likedredux"


export default configureStore({

    reducer:{
        Liked:likedReducer
       
    }
})