import { configureStore, ThunkAction, Action, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import myReducer from './reducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../exmpl/saga';

const saga = createSagaMiddleware();


export const store = configureStore( {
    reducer: {
        myReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
} )

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
