import React from 'react';
import { Example } from './exmpl/uselessExample';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Example/>
    </div>
  );
}

export default App;
