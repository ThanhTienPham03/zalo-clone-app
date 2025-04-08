import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    username: null,
    token: null,
    isAuthenticated: false,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess: (state, action) => {
        state.username = action.payload.username;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.username = null;
        state.token = null;
        state.isAuthenticated = false;
      },
    },
  });
  
  export const { loginSuccess, logout } = authSlice.actions;
  export default authSlice.reducer;
  
