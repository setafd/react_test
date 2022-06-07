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
        changeStatus(state, action){
            switch(action.type){
                case 'START': 
                    state.status = 'inProgress';
                    break;
                case 'END': 
                    state.status = 'Done';
                    break;
                default:
                    state.status = 'Prepairing';
                    break;
            }
        }
    }
} )

export const select = (state: RootState) => state.myReducer.status;

export default mySlice.reducer;
