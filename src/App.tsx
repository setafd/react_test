import React from 'react';
import { Example } from './exmpl/uselessExample';
import logo from './logo.svg';
import './App.css';
import { action } from './exmpl/saga';
import { useAppSelector } from './components/hooks';
import { select } from './components/reducer';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Example
        value={useAppSelector(select)}
        onStart={() => action('START')}
        onEnd={() => action('END')}
        onReset={() => action('RESET')} />
    </div>
  );
}

export default App;
