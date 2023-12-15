import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import productImages from './ProductCategory';
import Footer from './footer';
import ProductTable from './ProductTable';

function Products({ filterName }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProducts, setShowProducts] = useState(true); // Estado para controlar la visibilidad

  useEffect(() => {
    fetch('http://localhost/wordpress/wordpress/wp-json/wp/v2/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [filterName]);

  const handleProductClick = (productName) => {
    setSelectedProduct(productName);
    setShowProducts(false); 
  };

  const handleReturnClick = () => {
    setShowProducts(true); 
    setSelectedProduct(null); 
  };

  // const filteredProducts = products.filter(
  //   (product) => selectedProduct === product.acf.clasificación
  // );

  return (
    <>
      {showProducts && (
        <div className='containerFilter'>
          <h1 className='titleProducts'>Productos</h1>
          <section className='sectionFilter'>
            {productImages.map((image, index) => (
              <div
                className={`${index % 2 === 0 ? 'White' : 'Blue'} containerProducts`}
                key={image.name}
                onClick={() => handleProductClick(image.name)}
              >
                <img
                  className={image.name}
                  src={image.src}
                  alt={image.name}
                  style={{ width: image.width, height: image.height }}
                />
                <p className={`${index % 2 === 0 ? 'White' : 'Blue'} descriptionProducts`}>
                  {image.name}
                </p>
              </div>
            ))}
          </section>
        </div>
      )}

{selectedProduct && (
        <ProductTable selectedProduct={selectedProduct} products={products}  handleReturnClick={handleReturnClick} />
      )}
      
      <Footer />
    </>
  );
}

export default Products;




