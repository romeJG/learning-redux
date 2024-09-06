import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,  // Add your slice reducer here
    },
});

export default store;