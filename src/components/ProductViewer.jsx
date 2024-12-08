import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import ProductTable from './ProductTable';

function ProductViewer({fixedContainers}) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProducts, setShowProducts] = useState(true);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
      setLoading(true); // Inicia el estado de carga
        fetch('https://vibrogan.cl/wp/wp-json/wp/v2/producto?per_page=100')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al cargar los productos.');
          }
          return response.json();
        })
        .then((data) => {
          // Filtrar los productos que tienen acf para evitar errores
          const validProducts = data.filter((product) => product.acf);
          setProducts(validProducts); // Establecer solo los productos válidos
          setLoading(false); // Finaliza la carga
        })
        .catch((err) => {
          setError(err.message); // Captura el error
          setLoading(false); // Finaliza la carga incluso en caso de error
        });
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
          {/* Mostrar mensaje de carga */}
          {loading && <p>Cargando productos...</p>}

          {/* Mostrar mensaje de error */}
          {error && <p>Error: {error}</p>}

          {/* Mostrar la lista de productos */}
          {showProducts && !loading && !error && (
            <div className='containerFilter'>
              <h1 className='titleProducts'>Productos</h1>
              <section className='sectionFilter'>
                {fixedContainers.map((container) => (
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
    
          {selectedProduct && !loading && !error && (
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
