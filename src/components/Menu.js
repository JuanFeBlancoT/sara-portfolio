import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import casa from '../images/casa.jpg';

function Menu() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Estados para los textos
  const [text, setText] = useState({
    jardin: 'Introducción',
    escaleras: 'Fotos y reel',
    cocina: 'Evaluaciones',
    cuarto: 'Autoevaluación',
    estanteria: 'Escritos de <br/> autoría',
  });

  // Handlers para hover
  const handleMouseEnter = (section) => {
    const newText = {
      jardin: 'Casa en<br />el corazón',
      escaleras: 'Para ojos<br />visitantes',
      cocina: 'El lugar de<br />los encuentros',
      cuarto: 'Hablando con<br />la almohada',
      estanteria: 'Trabajos escritos'
    };
    setText((prevText) => ({
      ...prevText,
      [section]: newText[section],
    }));
  };

  const handleMouseLeave = (section) => {
    const originalText = {
      cocina: 'Evaluaciones',
      jardin: 'Introducción',
      escaleras: 'Fotos y reel',
      cuarto: 'Autoevaluación',
      estanteria: 'Escritos de <br/> autoría'
    };
    setText((prevText) => ({
      ...prevText,
      [section]: originalText[section],
    }));
  }; 

  // Navegación
  const navigateTo = (path) => {
    navigate(path);  
    setMenuOpen(false); // Cierra el menú al navegar
  };

  return (
    <div className="menu-container">
      <img src={casa} alt="Casa" className="background-image" />

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
            <li onClick={() => navigateTo('/jardin')}>Introducción</li>
            <li onClick={() => navigateTo('/escaleras')}>Fotos y reel</li>
            <li onClick={() => navigateTo('/cocina')}>Evaluaciones</li>
            <li onClick={() => navigateTo('/cuarto')}>Autoevaluación</li>
            <li onClick={() => navigateTo('/estanteria')}>Escritos de autoría</li>
          </ul>
        </div>
      )}

      <div className="menu-items">
        <div className="menu-item cocina" onMouseEnter={() => handleMouseEnter('cocina')} onMouseLeave={() => handleMouseLeave('cocina')} onClick={() => navigateTo('/cocina')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.cocina }}></h2>
        </div>
        <div className="menu-item cocina" onMouseEnter={() => handleMouseEnter('cocina')} onMouseLeave={() => handleMouseLeave('cocina')} onClick={() => navigateTo('/cocina')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.cocina }}></h2>
        </div>
        <div className="menu-item jardin" onMouseEnter={() => handleMouseEnter('jardin')} onMouseLeave={() => handleMouseLeave('jardin')} onClick={() => navigateTo('/jardin')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.jardin }}></h2>
        </div>
        <div className="menu-item escaleras" onMouseEnter={() => handleMouseEnter('escaleras')} onMouseLeave={() => handleMouseLeave('escaleras')} onClick={() => navigateTo('/escaleras')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.escaleras }}></h2>
        </div>
        <div className="menu-item cuarto" onMouseEnter={() => handleMouseEnter('cuarto')} onMouseLeave={() => handleMouseLeave('cuarto')} onClick={() => navigateTo('/cuarto')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.cuarto }}></h2>
        </div>
        <div className="menu-item estanteria" onMouseEnter={() => handleMouseEnter('estanteria')} onMouseLeave={() => handleMouseLeave('estanteria')} onClick={() => navigateTo('/estanteria')}>
          <h2 dangerouslySetInnerHTML={{ __html: text.estanteria }}></h2>
        </div>
      </div>
    </div>
  );
  
  
}

export default Menu;
