// src/state/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'Dwi Annisa',
    profilePicture: '/images/people.png', // Ganti dengan gambar yang sesuai
    role: 'Administrator',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Mengubah data user
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
