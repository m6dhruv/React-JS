import { configureStore } from "@reduxjs/toolkit";   // #1
import counterReducer from "./counter/counterSlice"  // #4

export const store = configureStore({  // #1
    reducer: {                         // reducer : change the state get initial state and return new state
        counter: counterReducer,       // #4
    },
})


// create a store