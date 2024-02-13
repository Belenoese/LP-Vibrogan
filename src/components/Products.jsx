import React from 'react';
import ProductViewer from './ProductViewer';
import { fixedContainers } from './ProductsConfig';
import Footer from './footer';


function Products() {
  return (
    <>
      <ProductViewer fixedContainers={fixedContainers} />
      <Footer />
    </>
  );
}

export default Products;





