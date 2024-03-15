import '../styles/Products.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Modal } from 'react-bootstrap';

function ProductTable({ selectedProduct, products, handleReturnClick }) {

  const [showModal, setShowModal] = useState(false);
  const [modalCarouselActiveIndex, setModalCarouselActiveIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = products.filter(
    (product) => selectedProduct === product.acf.clasificación
  );

  const openModal = (productId) => {
    const productIndex = filteredProducts.findIndex(
      (product) => product.id === productId
    );
    setSelectedImageIndex(productIndex);
    setModalCarouselActiveIndex(productIndex);
    setShowModal(true);
  };

  const handleModalCarouselChange = (selectedIndex, e) => {
    setModalCarouselActiveIndex(selectedIndex);
  };

  const closeModal = () => {
    setSelectedImageIndex(0);
    setModalCarouselActiveIndex(0);
    setShowModal(false);
  };

  if (isLoading) {
    return <div>Loading products...</div>; 
  }


  return (
    <section className='backroundTable'>
      <h2 className='titleTableContainer'>{selectedProduct}</h2>
      <div className='tableContainer'>
        <table className='tableProducts'>
          <thead >
            <tr >
              <th className='tableHeader' scope='col'>IMAGEN</th>
              <th className='tableHeader' scope='col'>NOMBRE</th>
              <th className='tableHeader' scope='col'>LARGO (mm)</th>
              <th className='tableHeader' scope='col'>ANCHO (mm)</th>
              <th className='tableHeader' scope='col'>ALTO (mm)</th>
              <th className='tableHeader' scope='col'>CANTIDAD A CUBRIR (mt2)</th>
              <th className='tableHeader' scope='col'>PESO DEL PRODUCTO (kg)</th>

            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className='tableItem tableFirstItem'>
                {product.acf.imagen2?.url ? (
                  <Carousel activeIndex={modalCarouselActiveIndex} onSelect={handleModalCarouselChange}>
                    <Carousel.Item>
                      <img loading='lazy' className='d-block w-100 imgTable' src={product.acf.imagen} alt={product.acf.nombre} onClick={() => openModal(product.id)} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img loading='lazy' className='d-block w-100 imgTable' src={product.acf.imagen2.url} alt={product.acf.nombre} onClick={() => openModal(product.id)} />
                    </Carousel.Item>
                  </Carousel>
                   ) : (
                    <img loading='lazy' className='d-block w-100 imgTable' src={product.acf.imagen} alt={product.acf.nombre} onClick={() => openModal(product.id)} />
                  )}
                </td>

                <td className='tableItem'>{product.acf.nombre}</td>
                <td className='tableItem'>{product.acf.largo}</td>
                <td className='tableItem'>{product.acf.ancho}</td>
                <td className='tableItem'>{product.acf.alto}</td>
                <td className='tableItem'>{product.acf.cantidad_a_cubrir_mt2}</td>
                <td className='tableItem'>{product.acf.peso_del_producto_kg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='backButton' onClick={handleReturnClick}>VOLVER</button>
      </div>
      <Modal className='modalProductTable' show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className='modalTitleTable'>{filteredProducts[selectedImageIndex].acf.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBodyTable'>
        {filteredProducts[selectedImageIndex].acf.imagen2?.url ? (
      <Carousel activeIndex={modalCarouselActiveIndex} onSelect={handleModalCarouselChange}>
        <Carousel.Item>
          <img loading='lazy' className='d-block w-100 imgTableModal' src={filteredProducts[selectedImageIndex].acf.imagen} alt={filteredProducts[selectedImageIndex].acf.nombre} />
        </Carousel.Item>
        <Carousel.Item>
          <img loading='lazy' className='d-block w-100 imgTableModal' src={filteredProducts[selectedImageIndex].acf.imagen2.url} alt={filteredProducts[selectedImageIndex].acf.nombre} />
        </Carousel.Item>
      </Carousel>
    ) : (
      <img loading='lazy' className='d-block w-100 imgTableModal' src={filteredProducts[selectedImageIndex].acf.imagen} alt={filteredProducts[selectedImageIndex].acf.nombre} />
    )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ProductTable;
