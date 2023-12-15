// Nuevo componente ProductTable.js
import '../styles/Products.css';

function ProductTable({ selectedProduct, products, handleReturnClick }) {
    const filteredProducts = products.filter(
        (product) => selectedProduct === product.acf.clasificación
      );

  return (
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
        <button className='backButton' onClick={handleReturnClick}>VOLVER</button>
      </div>
    </section>
  );
}

export default ProductTable;
