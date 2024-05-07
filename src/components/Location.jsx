import '../styles/Location.css'
import ImgFirstLocation from '../assets/Images/ImgFirstLocation.png'
import ImgSecondLocation from '../assets/Images/ImgSecondLocation.jpg'
import Footer from './footer'


function Location() {


  return (
    <>
      <section className='firstSectionLocation'>
        <h1 className='titleFirstSectionLocation'>¡ESPERAMOS TU VISITA!</h1>
        <p className='textFirstSectionLocation'>Nuestra planta se ubica en el acceso Norte de la ciudad de Los Ángeles, a unos 6,0 Km de Av. Sorvicenta. Se emplaza en caletera Poniente del enlace Rarinco hacia el Norte en el kilómetro 499 Longitudinal 5 Sur.
          Ingreso por Ruta 5 Sur, girar hacia la derecha para Peaje Rarinco en acceso Norte de Los Ángeles. Luego en rotonda girar hacia la derecha para tomar caletera G25, hasta la entrada de la Industria.</p>
      </section>
      <section className='secondSectionLocation'>
          <img loading='lazy' className='imgLocation' src={ImgFirstLocation} />
          <img loading='lazy' className='imgLocation' src={ImgSecondLocation} />
      </section>
      <section className='sectionMapsLocation'>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48212.09164528935!2d-72.43775965136717!3d-37.387227599999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bdf0073bce39b%3A0x4826de02ab8e80a5!2svibrogan!5e1!3m2!1ses-419!2scl!4v1710450657220!5m2!1ses-419!2scl' style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
      </section>
      <Footer />
    </>
  )
}

export default Location