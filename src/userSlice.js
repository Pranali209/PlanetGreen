import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Registered users
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null, // Persisted user
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
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        localStorage.removeItem('currentUser');
      }
    },
    logoutUser: (state) => {
  state.currentUser = null;
  localStorage.removeItem('currentUser');
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
