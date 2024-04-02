import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'
import logo from '../assets/Images/Logo.png'
import React, { useState } from 'react';


const Navigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <a className='downloadPdf' href="https://drive.google.com/file/d/1-otojOzYEuwy8GJPTNJCW3fXoRMX65UP/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Propuesta Comercial
        <i className="fa-solid fa-file-pdf"></i>
      </a>
      <nav >
        <img loading='auto' className='logo' src={logo} alt='Logo de la empresa' />
        <button className='mobile-menu' title='Haz click para desplegar el menu' onClick={toggleMenu}>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className={`ContainerPages ${menuVisible ? 'menu-visible' : ''}`}>
          <ul className='menuLinks'>
            <li className='Pages'>
              <NavLink to='/' onClick={toggleMenu}>Inicio</NavLink>
            </li>
            <li className='Pages'>
              <NavLink to='/about' onClick={toggleMenu}>Acerca de nosotros</NavLink>
            </li>
            <li className='Pages'>
              <NavLink to='/products' onClick={toggleMenu}>Productos</NavLink>
            </li>
            <li className='Pages'>
              <NavLink to='/location' onClick={toggleMenu}>Ubicación</NavLink>
            </li>
            <li className='Pages Contact'>
              <NavLink to='/contact' onClick={toggleMenu}>Contáctanos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

