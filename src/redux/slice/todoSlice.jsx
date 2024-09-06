import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1);
        },
        reset: (state) => {
            return initialState;
        },
    },
});

export const { addTodo, removeTodo, reset } = todoSlice.actions;
export default todoSlice.reducer;