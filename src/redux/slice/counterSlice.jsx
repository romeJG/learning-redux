
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    count: 3,
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
            state.count = initialState.count;
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
