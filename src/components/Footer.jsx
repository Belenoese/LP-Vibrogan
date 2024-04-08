import IconFacebook from '../assets/Images/IconFacebook.png'
import IconInsta from '../assets/Images/IconInsta.png'
import IconWsp from '../assets/Images/IconWsp.png'
import LogoGris from '../assets/Images/LogoGris.png'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='sectionFooter'>
            <section className='firstSectionFooter'>
              <div className='contactInfoFooter'>
                <strong className='titleAddressFooter'>Dirección:</strong>
                <span className='addressFooter'>Longitudinal 5 Sur, Km 499, Los Ángeles</span>
              </div>

              <div className='contactInfoFooter'>
                <strong className='titlePhoneFooter'>Teléfono:</strong>
                <a href='tel:432328000' className='phoneFooter'><i className="fa-solid fa-phone"></i> 43228000</a>
              </div>

              <div className='contactInfoFooter'>
                <strong className='titleMailFooter'>Correo electrónico:</strong>
                <a href='mailto:contacto@vibrogan.cl' className='mailFooter'><i className="fa-solid fa-envelope"></i> contacto@vibrogan.cl</a>
              </div>
            </section>
            <section className='sectionSocialNetworkFooter'>
            <strong className='socialNetworkFooter'>Redes Sociales:</strong>
             <div className='containerLinks'>
              <div className='textSocialLink'>
              
              <a href='https://web.facebook.com/Vibrogan/'>
                <img loading='lazy' src={IconFacebook} alt='Link a pagina de facebook' className='iconFaceFooter' />
                <span className='linkSocialNetworkFace'>Facebook - VIBROGAN</span>
              </a>
              </div>

              <div className='textSocialLink'>
              <a href='https://www.instagram.com/vibrogan.cl/'>
                <img loading='lazy' src={IconInsta} alt='Link a pagina de Instagram' className='iconInstaFooter' />
                <span className='linkSocialNetworkInsta'>Instagram - @vibrogan</span>
              </a>
              </div>

              <div className='textSocialLink'>
              <a href='https://wa.me/message/AUL244VH32MKB1'>
                <img loading='lazy' src={IconWsp} alt='Link a whatsapp' className='iconWspFooter' />
                <span className='linkSocialNetworkWsp'>WhatsApp - +56 43 2328000</span>
              </a>
              </div>
              </div>
            </section>
            <img loading='lazy' src={LogoGris} alt='Logo de la empresa' className='logoFooter' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;