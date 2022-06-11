import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/statusStore';
import './index.css';
import App from './App';
import Catalog from './pages/Catalog'
import Header from './components/header/header';
import ProductCard from './pages/Product';
import Example from './exmpl/uselessExample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="catalog" element={<Catalog />}>
        <Route path="product" element={<ProductCard />} />
      </Route>
      <Route path='example' element={<Example />} />
    </Routes>
    </BrowserRouter>
  </Provider>,
);
