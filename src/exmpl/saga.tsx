import { put, takeEvery, all } from 'redux-saga/effects'
import { store } from '../components/store';

export const action = (type: 'START' | 'END' | 'RESET' ) => store.dispatch({type});

export function* checkStatus() {
    console.log('Saga works')
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* startAsync() {
    yield delay(3000);
    yield put({type: 'START'});
    console.log('START ASYNC');
}

export function* watchStartAsync() {
    yield takeEvery('START_ASYNC', startAsync)
}

export function* endAsync() {
    yield delay(3000);
    yield put({type: 'END'});
    console.log('END ASYNC');
}

export function* watchEndAsync() {
    yield takeEvery('END_ASYNC', endAsync)
}

export function* resetAsync() {
    yield delay(3000);
    yield put({type: 'RESET'});
    console.log('RESET ASYNC');
}

export function* watchResetAsync() {
    yield takeEvery('RESET_ASYNC', resetAsync)
}

export default function* rootSaga() {
    yield all([
        checkStatus(),
        watchStartAsync(),
        watchEndAsync(),
        watchResetAsync()
    ])
}
