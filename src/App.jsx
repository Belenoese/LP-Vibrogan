import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';


const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Products = React.lazy(() => import('./components/Products'));
const Contact = React.lazy(() => import('./components/Contact'));
const ProductTable = React.lazy(() => import('./components/ProductTable'));
const Location = React.lazy(() => import('./components/location'));

function App() {
  return (
    <div>
      <Navigation />
    
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/table/:category" element={<ProductTable />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;



