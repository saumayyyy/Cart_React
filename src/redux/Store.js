import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice.js";



export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
    }
});

export default store;