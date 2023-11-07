import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'
import logo from '../assets/Logo.png'
import React, { useState } from 'react';


const Navigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav >
        <img src={logo} alt='Logo de la empresa' />
        <button onClick={toggleMenu}>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className={`ContainerPages ${menuVisible ? 'menu-visible' : ''}`}>
          <ul>
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

