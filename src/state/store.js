// src/state/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import uiReducer from './uiSlice';

const store = configureStore({
  reducer: {
    user: userReducer, // Reducer untuk user
    ui: uiReducer,
  },
});

export default store;
