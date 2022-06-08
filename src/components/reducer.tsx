import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface MyState{
    value: number;
    status: 'Prepairing' | 'inProgress' | 'Done';
}

const initialState: MyState = {
    value: 0, 
    status: "Prepairing"
}

const actions = {
    startAction: createAction('START_ASYNC'),
    endACtion: createAction('END_ASYNC'),
    resetAction: createAction('RESET_ASYNC')
}

export const myReducer = createReducer( initialState, (builder) =>{
    builder
        .addCase(actions.startAction, (state, action) => {
            state.status = 'inProgress'
        })
        .addCase(actions.endACtion, (state, action) => {
            state.status = 'Done'
        })
        .addCase(actions.resetAction, (state, action) => {
            state.status = 'Prepairing'
        })
})


export const select = (state: RootState) => state.myReducer.status;
