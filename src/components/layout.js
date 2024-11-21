import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './styles/layout.css';

function Layout() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false); // Cierra el menú al navegar
  };

  return (
    <div className="layout-container">
      {/* Menú hamburguesa */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Lista desplegable del menú */}
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => navigateTo('/')}>Declaración de artista</li>
            <li onClick={() => navigateTo('/menu')}>Menú</li>
            <li onClick={() => navigateTo('/escaleras')}>Fotos y reel</li>
            <li onClick={() => navigateTo('/cocina')}>Evaluaciones</li>
            <li onClick={() => navigateTo('/cuarto')}>Autoevaluación</li>
            <li onClick={() => navigateTo('/estanteria')}>Trabajos escritos</li>
            <li onClick={() => navigateTo('/contacto')}>Agradecimientos y contacto</li>
          </ul>
        </div>
      )}

      {/* Contenido dinámico */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
