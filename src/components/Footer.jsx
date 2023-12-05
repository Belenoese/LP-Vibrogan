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
                <span className='phoneFooter'>432 328000</span>
              </div>

              <div className='contactInfoFooter'>
                <strong className='titleMailFooter'>Correo:</strong>
                <span className='mailFooter'>Vibrogan@Gmail.com</span>
              </div>
            </section>
            <section className='sectionSocialNetworkFooter'>
            <strong className='socialNetworkFooter'>Redes Sociales:</strong>
             <div className='containerLinks'>
              <div className='textSocialLink'>
              
              <a href='https://www.facebook.com/vibrogan'>
                <img src={IconFacebook} alt='Link a pagina de facebook' className='iconFaceFooter' />
              </a>
              <span className='linkSocialNetworkFace'>Facebook - VIBROGAN</span>
              </div>

              <div className='textSocialLink'>
              <a href='https://www.instagram.com/vibrogan'>
                <img src={IconInsta} alt='Link a pagina de Instagram' className='iconInstaFooter' />
              </a>
              <span className='linkSocialNetworkInsta'>Instagram - @vibrogan</span>
              </div>

              <div className='textSocialLink'>
              <a href='https://www.whatsapp.com/whatsapp'>
                <img src={IconWsp} alt='Link a whatsapp' className='iconWspFooter' />
              </a>
              <span className='linkSocialNetworkWsp'>WhatsApp - +569 45200857</span>
              </div>
              </div>
            </section>
            <img src={LogoGris} alt='Logo de la empresa' className='logoFooter' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;