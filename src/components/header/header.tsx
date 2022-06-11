import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to={'/'}>Home</Link> | {" "}
        <Link to={'/catalog'}>Catalog</Link> | {" "}
        <Link to={'/example'}>Example</Link>
      </nav>
    </header>
  );
}

export default Header;
