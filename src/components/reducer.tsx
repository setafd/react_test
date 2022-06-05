import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface MyState{
    value: number;
    status: 'Prepairing' | 'inProgress' | 'Done';
}

const initialState: MyState = {
    value: 0, 
    status: "Prepairing"
}

export const mySlice = createSlice( {
    name: 'my',
    initialState,
    reducers: {
        start: (state) => {
            state.status = 'inProgress';
        },
        end: (state) => {
            state.status = 'Done';
        },
        reset: (state) => {
            state.status = 'Prepairing';
        }
    }
} )

export const { start, end, reset } = mySlice.actions;

export const select = (state: RootState) => state.myReducer.status;

export default mySlice.reducer;
