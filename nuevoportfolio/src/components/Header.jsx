import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 fixed-top w-100">
      <nav className="container d-flex justify-content-between">
        <h1 className="logo">Mi Portafolio</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#hero">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
