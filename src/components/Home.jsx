import '../styles/Home.css'
import '../styles/FilterProducts.css'
import '../styles/ContactInfo.css'
import Mano from '../assets/Images/Mano.png'
import productImages from './ProductCategory'
import TuboSection3 from '../assets/Images/TuboSection3.png'
import ImgCompromiso from '../assets/Images/ImgCompromiso.png'
import ImgAsisTec from '../assets/Images/ImgAsisTec.png'
import ImgDespacho from '../assets/Images/ImgDespacho.png'
import ServisInstalacion from '../assets/Images/ServisInstalacion.png'
import IconFacebook from '../assets/Images/IconFacebook.png'
import IconInsta from '../assets/Images/IconInsta.png'
import IconWsp from '../assets/Images/IconWsp.png'
import LogoGris from '../assets/Images/LogoGris.png'

function Home() {

  const first6Divs = productImages.slice(0, 6);

  return (
    <>
      <article className='articleHome'>
        <section className="section1">
          <h1 className='mainTitle'>PREFABRICADOS DE HORMIGÓN</h1>
          <h2 className='subtitle'>Entregamos excelencia respaldada por nuestra experiencia</h2>
          <h4 className='description'>Encuentre la máxima calidad en productos y servicios de prefabricados de hormigón, brindamos a nuestros clientes la asistencia
            técnica que requieren, además de servicios de despacho e instalación a domicilio. Estamos aquí para superar tus expectativas.
            ¡Contáctanos y experimenta la diferencia!</h4>
          <div className='containerExperience'>
            <h3 className='experience'>+80 Años de Experiencia</h3>
            <p className='descriptionExperience'>Nuestra empresa cuenta con una larga trayectoria entregando la mejor calidad en prefabricados de hormigón a nuestros clientes desde 1948.</p>
            <button className="contact" title="Haz clic para contactar" aria-label="Haz clic para contactar">CONTACTAR</button>
            <img className='Mano' src={Mano} />
          </div>
        </section>
        <div className='containerFilter'>
          <h1 className='titleProducts'>Productos</h1>
          <section className="sectionFilter">
            {first6Divs.map((image, index) => (
              <div className={`${index % 2 === 0 ? 'White' : 'Blue'} containerProducts`} key={image.name}>
                <img
                  className={image.name}
                  src={image.src}
                  alt={image.name}
                  style={{ width: image.width, height: image.height }}
                />
                <p className={`${index % 2 === 0 ? 'White' : 'Blue'} descriptionProducts`}>{image.name}</p>
              </div>
            ))}
          </section>
          <button className="viewMore" title="Haz clic para ver todos los productos" aria-label="Haz clic para ver todos los productos">VER MÁS</button>
        </div>
        <section className='section3'>
          <img className='tuboSection3' src={TuboSection3} />
          <div className='services'>
            <div id='firstService' className='containerService'>
              <p className='textService'>COMPROMISO MEDIO AMBIENTAL</p>
            </div>
            <img className='imgFirstService' src={ImgCompromiso} />

            <div id='secondService' className='containerService'>
              <p className='textService'>ASISTENCIA TÉCNICAL</p>
            </div>
            <img className='imgSecondService' src={ImgAsisTec} />

            <div id='thirdService' className='containerService'>
              <p className='textService'>DESPACHO A DOMICILIO</p>
            </div>
            <img className='imgThirdService' src={ImgDespacho} />

            <div id='fourthService' className='containerService'>
              <p className='textService'>SERVICIO DE INSTALACIÓN</p>
            </div>
            <img className='imgFourthService' src={ServisInstalacion} />
          </div>
          <div className='contactInfo'>
            <h3 className='titleContactInfo'>CONTÁCTANOS</h3>
            <ul className='menuInfo'>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Teléfono:</strong>
                <span className='spanContactInfo'>432 328 000</span>
              </li>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Correo electrónico:</strong>
                <span className='spanContactInfo'>vibrogan@gmail.com</span>
              </li>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Redes sociales:</strong>
                <div className='socialContact'>
                  <a href="#" className='socialNetContactInfo'>
                    <img src={IconFacebook} alt='Perfil de facebook' className='iconFace' />
                  </a>
                  <a href="#" className='socialNetContactInfo'>
                    <img src={IconInsta} alt='Perfil de Instagram' className='iconInsta' />
                  </a>
                  <a href="#" className='socialNetContactInfo'>
                    <img src={IconWsp} alt='Perfil de whatsapp' className='iconWsp' />
                  </a>
                </div>
              </li>
              <li className='itemInfo address'>
                <strong className='strongContactInfo'>DIRECCIÓN:</strong>
                <span className='spanContactInfo'>longitudinal 5 sur, km 499, Los Ángeles</span>
              </li>
              <article className='mapsContactInfo'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3029.800768961463!2d-72.36428792413456!3d-37.38638497208589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDIzJzExLjAiUyA3MsKwMjEnNDIuMiJX!5e1!3m2!1ses-419!2scl!4v1700368776828!5m2!1ses-419!2scl" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </article>
              <li className='itemInfo'>
                <strong className='strongContactInfo officeHours'>HORARIO DE ATENCIÓN:</strong>
                <span className='spanContactInfo infoHours'>Lunes a viernes de 09:00 a 13:00 hrs. y de 14:00 a 18:00 hrs. <br /> Sábados de 09:00 a 13:30 hrs.</span>
              </li>
            </ul>
            <img src={LogoGris} alt='Logo de la empresa' className='logoGris' />
          </div>
        </section>
      </article>
    </>
  )
}

export default Home