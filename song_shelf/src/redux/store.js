// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer'; // Import the root reducer
;

// Configure the store with Redux Toolkit and Saga middleware
const store = configureStore({
  reducer: rootReducer
  
});



export default store;
