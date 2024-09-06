
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    count: 0,
    test: 1
};

// Create the slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        add: (state, action) => {
            state.count += action.payload;
        },
        addTest: (state, action) => {
            state.test += action.payload;
        }
    }
});

// Export the actions
export const { increment, decrement, reset, add, addTest } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
