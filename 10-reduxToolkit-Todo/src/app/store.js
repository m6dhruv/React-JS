import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feactures/todo/todoSlice';

export const store = configureStore({
    reducer : todoReducer
})