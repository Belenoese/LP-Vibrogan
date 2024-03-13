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
      <Footer />
    </>
  )
}

export default Location