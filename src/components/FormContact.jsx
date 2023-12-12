import React, { useState } from 'react';
import '../styles/FormContact.css'

function FormContact() {

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleInput = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };


  return (
    <>
      <section className='sectionContact'>
        <h1 className='titleContact'>¿Qué podemos hacer por usted?</h1>
        <p className='descriptionContact'>Estamos preparados para trabajar en un proyecto de cualquier complejidad, ya sea comercial o residencial.</p>
        <form className='formContact'>
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
            <input type='text' id='phone' name='phone' placeholder='TELÉFONO' required />
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
      </section>
    </>
  )
}

export default FormContact