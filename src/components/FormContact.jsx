import React, { useState, useRef } from 'react';
import '../styles/FormContact.css'
import emailjs from '@emailjs/browser';
import SuccessModal from './SuccessModal';

function FormContact() {

  const formRef = useRef(null)

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleInput = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault(); 

    
    const emailData = {
      from_name: inputValues.name,
      from_email: inputValues.email,
      subject: inputValues.subject,
      message: inputValues.message,
      from_phone: inputValues.phone,
    };

     
     emailjs.send('service_srfa8ie', 'template_dw2xgbg', emailData, '6tnvkkupJB3iwnGi_')
     .then((response) => {
      console.log('Correo enviado con éxito:', response);
      if (formRef.current) {
        formRef.current.reset();

        setInputValues({
          name: '',
          email: '',
          subject: '',
          message: '',
          phone: '',
        });
        setShowModal(true);
        setIsSuccess(true);
      }
    })
     .catch((error) => {
      console.error('Error al enviar el correo:', error);
      setShowModal(true);
      setIsSuccess(false);
     });
 };

 const closeModal = () => {
  setShowModal(false); 
  setIsSuccess(false);
};

  return (
    <>
      <section className='sectionContact'>
        <h1 className='titleContact'>¿Qué podemos hacer por usted?</h1>
        <p className='descriptionContact'>Estamos preparados para trabajar en proyectos de cualquier complejidad, ya sea comercial o residencial.</p>
        <form className='formContact' onSubmit={sendEmail} ref={formRef}>
          <div className='inputGroup'>
            <label htmlFor='name' className='visuallyHidden'>Nombre:</label>
            <input type='text' id='name' name='name' placeholder='NOMBRE' required  onChange={(e) => handleInput('name', e.target.value)} />
            {inputValues.name === '' && <span className='asteriskName'>*</span>}
          </div>

          <div className='inputGroup'>
          <label htmlFor='email' className='visuallyHidden'>Correo electrónico:</label>
            <input type='email' id='email' name='email' placeholder='CORREO ELECTRÓNICO' required onChange={(e) => handleInput('email', e.target.value)} />
            {inputValues.email === '' && <span className='asteriskEmail'>*</span>}
          </div>

          <div className='inputGroup'>
          <label htmlFor='subject' className='visuallyHidden'>Asunto:</label>
            <input type='text' id='subject' name='subject' placeholder='ASUNTO' required onChange={(e) => handleInput('subject', e.target.value)} />
            {inputValues.subject === '' && <span className='asteriskSubject'>*</span>}
          </div>

          <div className='inputGroup'>
          <label htmlFor='phone' className='visuallyHidden'>Teléfono:</label>
            <input type='text' id='phone' name='phone' placeholder='TELÉFONO' onChange={(e) => handleInput('phone', e.target.value)} />
          </div>

          <div id='message' className='inputGroup'>
          <label htmlFor='message' className='visuallyHidden'>Mensaje:</label>
            <textarea className='placeholderMessage' name='message' placeholder='MENSAJE' required onChange={(e) => handleInput('message', e.target.value)}></textarea>
            {inputValues.message === '' && <span className='asteriskMessage'>*</span>}
          </div>

        <div className='requiredFields'>
          <span className='asterisk'>*</span>
          <p className='required'>Indica un campo obligatorio</p>
          </div>

          <div className='buttonGroup'>
            <button className='buttonFormContact' type='submit'>ENVIAR</button>
          </div>
        </form>
        {showModal && <SuccessModal closeModal={closeModal} isSuccess={isSuccess} />}
      </section>
    </>
  )
}

export default FormContact