import React from 'react';
import { useAppSelector } from '../components/hooks';
import { select } from '../components/reducer';
import { action } from './saga';

function Example() {
  const value = useAppSelector(select);

  const onStart = () => action('START_ASYNC');
  const onEnd = () => action('END_ASYNC');
  const onReset = () => action('RESET_ASYNC');

  return (
    <div>
      <span>{value}</span>
      <button type="button" onClick={onStart}>
        start
      </button>
      <button type="button" onClick={onEnd}>
        end
      </button>
      <button type="button" onClick={onReset}>
        reset
      </button>
    </div>
  );
}

export default Example;
