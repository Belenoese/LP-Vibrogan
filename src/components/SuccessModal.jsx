import React from 'react';
import '../styles/SuccessModal.css';

const SuccessModal = ({ closeModal, isSuccess }) => {
  return (
    <div className='modal-overlay'>
      <div className='success-modal'>
        <h2 className='titleModal'>{isSuccess ? '¡Formulario enviado! Gracias por comunicarte con nosotros.' : 'Error al enviar el formulario'}</h2>
        <p className='textModal'>{isSuccess ? 'Estaremos en contacto contigo pronto.' : 'Por favor, inténtalo de nuevo más tarde.'}</p>
        <button className='buttonModal' onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default SuccessModal;
