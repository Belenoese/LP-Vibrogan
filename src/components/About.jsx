import '../styles/About.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
import ImgAboutOne from '../assets/Images/img_about_one.jpg'
import ImgAboutTwo from '../assets/Images/img_about_two.jpg'

function About() {


  return (
    <>
      <section className='firstSectionAbout'>
        <h1 className='aboutMe'>¿QUIÉNES SOMOS?</h1>
        <p className='textAbout'>VIBROGAN es una empresa familiar con más de 80 años de experiencia dedicada a la elaboración de productos prefabricados de hormigón.
          Es con esta amplia experiencia que en la actualidad hacemos entrega a nuestros clientes de la mejor calidad
          de productos, acompañando de la mano a cada uno de ellos para la realización exitosa de sus proyectos. Ofrecemos un
          servicio técnico especializado y opciones de despacho a domicilio.
          Nuestra dedicación a lo largo de los años se refleja en la satisfacción de nuestros clientes y en la excelencia de nuestros productos.</p>

         <p className='textAbout'>Nuestra linea de productos esta orientada a: Redes de A.P y Alcantarillado, Instalaciones Eléctricas y Obras Civiles.</p>

      </section>
      <section className='secondSectionAbout'>
        <div className='containerVisionMission'>
          <div className='vision'>
            <h2 className='titleVision'>VISIÓN</h2>
            <p className='textVision'>Elaborar prefabricados de hormigón con técnicas y procedimientos que nos aseguren un estándar de calidad óptimo y a un costo que nos permita posicionarnos
              como un proveedor competente y capaz de responder a las necesidades del mercado.</p>
          </div>
          <div className='mission'>
            <h2 className='titleMission'>MISIÓN</h2>
            <p className='textMission'>Contribuir y aportar al desarrollo de la industria de los prefabricados de hormigón, que permita ofrecer productos y servicios, con altos estándares de calidad y compromiso con el medio ambiente.</p>
          </div>
        </div>
      </section>
      <section className='thirdSectionAbout'>
        <div className='containerImagesAbout'>
        <h1 className='titleThirdSectionAbout'>PLANTA VIBROGAN, LOS ANGELES VIII REGIÓN</h1>
          <div className='imagesAbout'>
            <img loading='lazy' src={ImgAboutOne} className='imgAbout' alt='imagen empresa vibrogan los Ángeles' />
          </div>

          <div className='imagesAbout'>
            <img loading='lazy' src={ImgAboutTwo} className='imgAbout' alt='imagen empresa vibrogan los Ángeles' />
          </div>
        </div>
        <div className='containerButtons'>
          <Link to='/products'>
          <button className='button1'>VISUALIZAR PRODUCTOS</button>
          </Link>
          <Link to='/contact'>
          <button className='button2'>CONTÁCTANOS</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
