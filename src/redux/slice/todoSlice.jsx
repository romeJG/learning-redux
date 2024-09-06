import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    done: [],
};

const todoSlice = createSlice({
    name: "toDoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        },
        moveToDone: (state, action) => {
            //get the item then move it to done
            const todo = state.todos.splice(action.payload, 1);
            state.done.push(todo[0]);
        },
        removeDone: (state, action) => {
            state.done.splice(action.payload, 1);
        },
        reset: () => {
            return initialState;
        },
    },
});

export const { addTodo, removeTodo, reset, moveToDone, removeDone } = todoSlice.actions;
export default todoSlice.reducer;