import React, { useState } from 'react';
import { useAppSelector } from '../components/hooks';
import { select } from '../components/reducer';
import { action } from './saga';


export function Example() {
    const value = useAppSelector(select);

    const onStart = () => action('START_ASYNC');
    const onEnd   = () => action('END_ASYNC');
    const onReset = () => action('RESET_ASYNC'); 

    return(
        <div>
            <span>{value}</span>
            <button onClick={onStart}>
                start
            </button>
            <button onClick={onEnd}>
                end
            </button>
            <button onClick={onReset}>
                reset
            </button>
        </div>
    )
}