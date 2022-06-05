import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../components/hooks';

import { start, end, reset, select } from '../components/reducer'

export function Example() {
    const value = useAppSelector(select);
    const dispatch = useAppDispatch();

    return(
        <div>
            <span>{value}</span>
            <button onClick={() => dispatch(start())}>
                start
            </button>
            <button onClick={() => dispatch(end())}>
                end
            </button>
            <button onClick={() => dispatch(reset())}>
                reset
            </button>
        </div>
    )
}