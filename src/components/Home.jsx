import '../styles/Home.css'
import Mano from '../assets/Images/Mano.png'

function Home() {


  return (
    <>
      <article>
        <section className="section1">
          <h1>PREFABRICADOS DE HORMIGÓN</h1>
          <h2>Entregamos excelencia respaldada por nuestra experiencia</h2>
          <h4>Encuentre la máxima calidad en productos y servicios de prefabricados de hormigón, brindamos a nuestros clientes la asistencia
            técnica que requieren, además de servicios de despacho e instalación a domicilio. Estamos aquí para superar tus expectativas.
            ¡Contáctanos y experimenta la diferencia!</h4>
          <div className='containerExperience'>
            <h3>+80 Años de Experiencia</h3>
            <p>Nuestra empresa cuenta con una larga trayectoria entregando la mejor calidad en prefabricados de hormigón a nuestros clientes desde 1948.</p>
            <button className="contact" title="Haz clic para contactar">Contactar</button>
            <img className='Mano' src={Mano}></img>
          </div>
        </section>
      </article>
    </>
  )
}

export default Home