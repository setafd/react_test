import React from 'react';
import { Link } from 'react-router-dom';

function Catalog() {
  return (
    <div>
      <span>It's catalog</span>
      <Link to={'/catalog/product1'}>
        <button type='button'>To product 1</button>
      </Link>
    </div>
  );
}

export default Catalog;
