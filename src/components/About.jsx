import '../styles/About.css';
import RedesAP from '../assets/Images/RedesAP.png'
import InstalacionesElectricas from '../assets/Images/InstalacionesElectricas.png'
import ObrasCiviles from '../assets/Images/ObrasCiviles.png'
import PrimeraImgCarrusel from '../assets/Images/PrimeraImgCarrusel.png'
import SegundaImgCarrusel from '../assets/Images/SegundaImgCarrusel.png'
import Footer from './footer';

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
        <h1 className='titleThirdSectionAbout'>NUESTRA LINEA DE PRODUCTOS ESTA ORIENTADA A:</h1>
        <div className='containerCategories'>
          <div className='redesAP'>
            <img src={RedesAP} className='imgRedesAP' alt='imagen que representa el área de redes de agua potable y alcantarillado' />
            <p className='textRedesAP'>Redes de A.P y Alcantarillado</p>
          </div>
          <div className='electricalInstallations'>
            <img src={InstalacionesElectricas} className='imgElectricalInstallations' alt='imagen que representa el área de instalaciones eléctricas' />
            <p className='textElectricalInstallations'>Instalaciones Eléctricas</p>
          </div>
          <div className='civilWorks'>
            <img src={ObrasCiviles} className='imgCivilWorks' alt='imagen que representa el área de obras civiles' />
            <p className='textCivilWorks'>Obras Civiles</p>
          </div>
        </div>
        <div className='containerButtons'>
          <button className='button1'>VISUALIZAR PRODUCTOS</button>
          <button className='button2'>CONTÁCTANOS</button>
        </div>
      </section>
      <section className='fourthSection'>
        <p className='titleFourthSection'>PLANTA VIBROGAN, LOS ANGELES VIII REGIÓN</p>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={PrimeraImgCarrusel} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SegundaImgCarrusel} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={PrimeraImgCarrusel} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
