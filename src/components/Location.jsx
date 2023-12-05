import '../styles/Location.css'
import ImgFirstLocation from '../assets/Images/ImgFirstLocation.png'
import ImgSecondLocation from '../assets/Images/ImgSecondLocation.png'
import ImgThirdLocation from '..//assets/Images/ImgThirdLocation.png'
import Footer from './footer'


function Location() {


  return (
    <>
      <section className="firstSectionLocation">
        <h1 className="titleFirstSectionLocation">¡ESPERAMOS TU VISITA!</h1>
        <p className="textFirstSectionLocation">Nuestra planta se ubica en el acceso Norte de la ciudad de Los Ángeles, a unos 6,0 Km de Av. Sorvicenta. Se emplaza en caletera Poniente del enlace Rarinco hacia el Norte en el kilómetro 499 Longitudinal 5 Sur.
          Ingreso por Ruta 5 Sur, girar hacia la derecha para Peaje Rarinco en acceso Norte de Los Ángeles. Luego en rotonda girar hacia la derecha para tomar caletera G25, hasta la entrada de la Industria.</p>
      </section>
      <section className='secondSectionLocation'>
        <div className='containerFirstImg'>
          <img className='imgFirstLocation' src={ImgFirstLocation} />
        </div>
        <div className='referenceContainerOfEntry'>
          <p className='textImgLocation'>INGRESO PLANTA DESDE CALETERA Q-25</p>
          <img className='imgSecondLocation' src={ImgSecondLocation} />
          <p className='textImgLocation'>VISTA PRINCIPAL DE LA PLANTA</p>
          <img className='imgSecondLocation' src={ImgThirdLocation} />
        </div>
      </section>
      <section className='thirdSectionLocation'>
        <h1 className='titleThirdSectionLocation'>HORARIO DE ATENCIÓN</h1>
        <p className='textThirdSectionLocation'>Lunes a viernes de 09:00 a 13:00 hrs. y de 14:00 a 18:00 hrs.
          Sábados de 09:00 a 13:30 hrs.</p>
        <article className='mapLocation'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3029.800768961463!2d-72.36428792413456!3d-37.38638497208589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDIzJzExLjAiUyA3MsKwMjEnNDIuMiJX!5e1!3m2!1ses-419!2scl!4v1700368776828!5m2!1ses-419!2scl"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Location