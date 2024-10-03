// src/sagas/songSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongSuccess,
  addSongFailure,
  editSongSuccess,
  editSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
  fetchSongsRequest,
  addSongRequest,
  editSongRequest,
  deleteSongRequest,
} from '../features/songs/SongSlice'; // Import actions
import {
  fetchSongsApi,
  addSongApi,
  editSongApi,
  deleteSongApi,
} from '../api/api'; // Import API functions

// Fetch Songs Saga
function* fetchSongs() {
  try {
    const response = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(response.data)); // Dispatch success action with fetched songs
  } catch (error) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action with error message
  }
}

// Add Song Saga
function* addSong(action) {
  try {
    const response = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(response.data)); // Dispatch success action with the added song
  } catch (error) {
    yield put(addSongFailure(error.message)); // Dispatch failure action with error message
  }
}

// Edit Song Saga
function* editSong(action) {
  try {
    const response = yield call(editSongApi, action.payload.id, action.payload.updatedSong);
    yield put(editSongSuccess(response.data)); // Dispatch success action with the updated song
  } catch (error) {
    yield put(editSongFailure(error.message)); // Dispatch failure action with error message
  }
}

// Delete Song Saga
function* deleteSong(action) {
  try {
    yield call(deleteSongApi, action.payload); // Call the API to delete the song
    yield put(deleteSongSuccess(action.payload)); // Dispatch success action with the deleted song ID
  } catch (error) {
    yield put(deleteSongFailure(error.message)); // Dispatch failure action with error message
  }
}

// Watcher Saga
export default function* songSaga() {
  yield takeEvery(fetchSongsRequest.type, fetchSongs);
  yield takeEvery(addSongRequest.type, addSong);
  yield takeEvery(editSongRequest.type, editSong);
  yield takeEvery(deleteSongRequest.type, deleteSong);
}
