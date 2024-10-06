// src/sagas/rootSaga.js
import { all } from 'redux-saga/effects';
import songSaga from './songSaga'; // Import the song-related saga

// Combine all sagas here
export default function* rootSaga() {
  yield all([
    songSaga(), // Add more sagas here if you need
  ]);
}