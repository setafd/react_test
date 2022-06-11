import { put, takeEvery, all } from 'redux-saga/effects';
import store from '../stores/statusStore';

export const action = (type:'START_ASYNC' | 'END_ASYNC' | 'RESET_ASYNC') => store.dispatch({ type });

export function* startAsync() {
  console.log('Saga: START');
  yield put({ type: 'START' });
}

export function* endAsync() {
  console.log('Saga: END');
  yield put({ type: 'END' });
}

export function* resetAsync() {
  console.log('Saga: RESET');
  yield put({ type: 'RESET' });
}

export function* watchAllAsync() {
  yield takeEvery('START_ASYNC', startAsync);
  yield takeEvery('END_ASYNC', endAsync);
  yield takeEvery('RESET_ASYNC', resetAsync);
}

export default function* rootSaga() {
  yield all([
    watchAllAsync()]);
}
