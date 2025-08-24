import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Registered users
  currentUser: null, // Logged in user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const user = state.users.find(
        u => u.email === action.payload.email && u.password === action.payload.password
      );
      state.currentUser = user || null;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
