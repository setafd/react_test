import React, { useState } from 'react';
import { action } from './saga';


export function Example(
    value: any,
    onStart: () => typeof action,
    onEnd: () => typeof action,
    onReset: () => typeof action
    ) {

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