import React, { useState, useEffect } from 'react';


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/wordpress/wordpress/wp-json/wp/v2/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title.rendered}</li>
        ))}
      </ul>
    </div>
</>

  );
}

export default Products;
