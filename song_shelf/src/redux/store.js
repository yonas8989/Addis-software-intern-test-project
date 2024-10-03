// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'; // Import the root reducer
import rootSaga from '../sagas/rootSaga'; // Import the root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with Redux Toolkit and Saga middleware
const store = configureStore({
  reducer: rootReducer, // Root reducer for your app
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Replace thunk with saga
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);

export default store;
