import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import todoReducer from '../slice/todoSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
});

export default store;