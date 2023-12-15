import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Location from './components/Location';
import Contact from './components/Contact';
import Navigation from './components/Navigation'; 
import ProductTable from './components/ProductTable';

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table/:category" element={<ProductTable />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;



