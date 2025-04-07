import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        user: userReducer, // Thêm user reducer
    },
});

export default store;