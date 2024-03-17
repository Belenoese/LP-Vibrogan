import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import ProductTable from './ProductTable';

function ProductViewer({fixedContainers}) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProducts, setShowProducts] = useState(true);

    useEffect(() => {
        fetch('https://vibrogan.cl/wp/wp-json/wp/v2/producto')
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);
    
      const handleProductClick = (productName) => {
        setSelectedProduct(productName);
        setShowProducts(false);
      };
    
      const handleReturnClick = () => {
        setShowProducts(true);
        setSelectedProduct(null);
      };

      return (
        <>
          {showProducts && (
            <div className='containerFilter'>
              <h1 className='titleProducts'>Productos</h1>
              <section className='sectionFilter'>
                {fixedContainers.map((container, index) => (
                  <div
                    className='containerProducts'
                    key={container.name}
                    onClick={() => handleProductClick(container.name)}
                    style={{ backgroundImage: container.backgroundImage }}
                  >
                    <p className='descriptionProducts'>{container.name}</p>
                  </div>
                ))}
              </section>
            </div>
          )}
    
          {selectedProduct && (
            <ProductTable
              selectedProduct={selectedProduct}
              products={products}
              handleReturnClick={handleReturnClick}
            />
          )}
        </>
      );
    };

    export default ProductViewer;
