import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchAlbumsRequest,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} from '../features/songs/albumSlice'; // Adjust import path as needed
import { fetchAlbumsApi } from '.'; // Import API function

// Fetch Albums Saga
function* fetchAlbums() {
  try {
    const response = yield call(fetchAlbumsApi);
    yield put(fetchAlbumsSuccess(response.data)); // Dispatch success action with fetched albums
  } catch (error) {
    yield put(fetchAlbumsFailure(error.message)); // Dispatch failure action with error message
  }
}

// Watcher Saga
export default function* albumSaga() {
  yield takeEvery(fetchAlbumsRequest.type, fetchAlbums); // Listen for fetchAlbumsRequest actions
}
