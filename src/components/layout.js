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
            <li onClick={() => navigateTo('/')}>Inicio</li>
            <li onClick={() => navigateTo('/menu')}>Menú</li>
            <li onClick={() => navigateTo('/jardin')}>Jardín</li>
            <li onClick={() => navigateTo('/escaleras')}>Escaleras</li>
            <li onClick={() => navigateTo('/cocina')}>Cocina</li>
            <li onClick={() => navigateTo('/cuarto')}>Cuarto</li>
            <li onClick={() => navigateTo('/estanteria')}>Estantería</li>
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
