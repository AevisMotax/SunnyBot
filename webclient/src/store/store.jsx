// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
