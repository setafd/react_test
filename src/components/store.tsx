import { configureStore, ThunkAction, Action, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { myReducer } from './reducer';
import rootSaga from '../exmpl/saga';


const saga = createSagaMiddleware();


const store = configureStore( {
    reducer: {
        myReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
} )

saga.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
