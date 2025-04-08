import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null, // Lưu thông tin người dùng
    },
    reducers: {
        setUser: (state, action) => {
            state.userInfo = action.payload; // Lưu thông tin user
        },
        clearUser: (state) => {
            state.userInfo = null; // Xóa thông tin user
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;