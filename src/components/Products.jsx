import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import productImages from './ProductCategory';
import Footer from './footer';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProducts, setShowProducts] = useState(true); // Estado para controlar la visibilidad

  useEffect(() => {
    fetch('http://localhost/wordpress/wordpress/wp-json/wp/v2/productos')
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

  const filteredProducts = products.filter(
    (product) => selectedProduct === product.acf.clasificación
  );

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
        <section className='backroundTable'>
          <h2 className='titleTableContainer'>{selectedProduct}</h2>
        <div className="tableContainer">
          <table className="tableProducts">
            <thead >
              <tr >
                <th className='tableHeader' scope="col">IMAGEN</th>
                <th className='tableHeader' scope="col">NOMBRE</th>
                <th className='tableHeader' scope="col">MEDIDAS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className='tableItem'><img className='imgTable' src={product.acf.imagen} alt={product.acf.nombre} /></td>
                  <td className='tableItem'>{product.acf.nombre}</td>
                  <td className='tableItem'>{product.acf.medidas}</td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
        <button className='backButton' onClick={handleReturnClick}>VOLVER</button>
        </section>
      )}
      <Footer />
    </>
  );
}

export default Products;




