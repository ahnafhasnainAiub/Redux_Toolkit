import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Reducers/counterSlice';
import todoSlice from './Reducers/todoSlice';

const store = configureStore({
    reducer: {
       counter: counterSlice,
       todo: todoSlice
    }
});

export default store;