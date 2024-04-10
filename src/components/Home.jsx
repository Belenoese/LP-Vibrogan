import React, { useRef, useEffect, Suspense, lazy } from 'react';
import '../styles/Home.css'
import '../styles/Products.css'
import '../styles/ContactInfo.css'
import Mano from '../assets/Images/Mano.png'
import TuboSection3 from '../assets/Images/TuboSection3.png'
import ImgCompromiso from '../assets/Images/ImgCompromiso.png'
import ImgAsisTec from '../assets/Images/ImgAsisTec.png'
import ImgDespacho from '../assets/Images/ImgDespacho.png'
import IconFacebook from '../assets/Images/IconFacebook.png'
import IconInsta from '../assets/Images/IconInsta.png'
import IconWsp from '../assets/Images/IconWsp.png'
import LogoGris from '../assets/Images/LogoGris.png'
import FormContact from './FormContact'
import Footer from './footer'
import { Link } from 'react-router-dom';
import ProductViewer from './ProductViewer'
import { fixedContainers } from './ProductsConfig'
import { Carousel } from 'react-bootstrap';
import Imgdos from '../assets/Images/imgdos.jpg'
import Imguno from '../assets/Images/imguno.jpg'
import Video from '../assets/Video/video_ubicacion_vibroganok.mp4'
import LazyVideo from './lazyVideo';


const LazyFormContact = lazy(() => import('./FormContact'));
const LazyFooter = lazy(() => import('./footer'));

function Home() {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
    }

  }, []);

  return (
    <>
      <article className='articleHome'>

        <section className='section1'>

          <Carousel className='carouselHome' interval={8000}>

            <Carousel.Item>
              <img loading='auto' className='w-100 ImageCarouselHome' src={Imguno} alt='Imagen del letrero de la empresa vibrogan' />
            </Carousel.Item>

            <Carousel.Item>
              <img loading='lazy' className='w-100 ImageCarouselHome' src={Imgdos} alt='Imagen con productos de la empresa vibrogan' />
            </Carousel.Item>

            <Carousel.Item>
              <LazyVideo src={Video} type='video/mp4' />
            </Carousel.Item>
          </Carousel>


          <div className='infoSection1'>
            <h1 className='mainTitle'>PREFABRICADOS DE HORMIGÓN</h1>
            <h2 className='subtitle'>Entregamos excelencia respaldada por nuestra experiencia</h2>

            <Link to='/contact'>
              <button className='contact' title='Haz clic para contactar' aria-label='Haz clic para contactar'>CONTACTAR</button>
            </Link>
            <img loading='lazy' className='Mano' src={Mano} />
          </div>
        </section>

        <ProductViewer fixedContainers={fixedContainers} />

        <section className='section3'>
          <div className='services'>
            <img loading='lazy' className='tuboSection3' src={TuboSection3} />
            <div className='containerServices'>
              <div id='firstService' className='containerService'>
                <p className='textService'>COMPROMISO MEDIO AMBIENTAL</p>
              </div>
              <img loading='lazy' className='imgFirstService' src={ImgCompromiso} />

              <div id='secondService' className='containerService'>
                <p className='textService'>ASISTENCIA TÉCNICA</p>
              </div>
              <img loading='lazy' className='imgSecondService' src={ImgAsisTec} />

              <div id='thirdService' className='containerService'>
                <p className='textService'>DESPACHO A DOMICILIO</p>
              </div>
              <img loading='lazy' className='imgThirdService' src={ImgDespacho} />

            </div>
          </div>
          <div className='contactInfo'>
            <h3 className='titleContactInfo'>CONTÁCTANOS</h3>
            <ul className='menuInfo'>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Teléfono:</strong>
                <a href='tel:432328000' className='spanContactInfo'><i className='fa-solid fa-phone'></i> 43228000</a>
              </li>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Correo electrónico:</strong>
                <a href='mailto:contacto@vibrogan.cl' className='spanContactInfo'><i className='fa-solid fa-envelope'></i> contacto@vibrogan.cl</a>
              </li>
              <li className='itemInfo'>
                <strong className='strongContactInfo'>Redes sociales:</strong>
                <div className='socialContact'>
                  <a href='https://web.facebook.com/Vibrogan/' className='socialNetContactInfo'>
                    <img loading='lazy' src={IconFacebook} alt='Perfil de facebook' className='iconFace' />
                  </a>
                  <a href='https://www.instagram.com/vibrogan.cl/' className='socialNetContactInfo'>
                    <img loading='lazy' src={IconInsta} alt='Perfil de Instagram' className='iconInsta' />
                  </a>
                  <a href='https://wa.me/message/AUL244VH32MKB1' className='socialNetContactInfo'>
                    <img loading='lazy' src={IconWsp} alt='Perfil de whatsapp' className='iconWsp' />
                  </a>
                </div>
              </li>
              <li className='itemInfo address'>
                <strong className='strongContactInfo'>DIRECCIÓN:</strong>
                <span className='spanContactInfo'>longitudinal 5 sur, km 499, Los Ángeles</span>
              </li>
              <article className='mapsContactInfo'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48212.09164528935!2d-72.43775965136717!3d-37.387227599999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bdf0073bce39b%3A0x4826de02ab8e80a5!2svibrogan!5e1!3m2!1ses-419!2scl!4v1710450657220!5m2!1ses-419!2scl' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
              </article>
              <li className='itemInfo'>
                <strong className='strongContactInfo officeHours'>HORARIO DE ATENCIÓN:</strong>
                <span className='spanContactInfo infoHours'>Lunes a viernes de 09:00 a 13:00 hrs. y de 14:00 a 18:00 hrs.</span>
                <span className='spanContactInfo infoHours'>Sábados de 09:00 a 13:30 hrs.</span>
              </li>
            </ul>
            <img loading='lazy' src={LogoGris} alt='Logo de la empresa' className='logoGris' />
          </div>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <FormContact />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>

      </article>
    </>
  )
}

export default Home