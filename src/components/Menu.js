import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import casa from '../images/casa.jpg';

function Menu() {
  const navigate = useNavigate();

  // Estados para los textos
  const [text, setText] = useState({
    jardin: 'Casa en<br />el corazón',
    escaleras: 'Para ojos<br />visitantes',
    cocina: 'El lugar de<br />los encuentros',
    cuarto: 'Hablando con<br />la almohada'
  });

  // Handlers para hover
  const handleMouseEnter = (section) => {
    const newText = {
      jardin: 'Introducción',
      escaleras: 'Fotos y reel',
      cocina: 'Evaluaciones',
      cuarto: 'Autoevaluación'
    };
    setText((prevText) => ({
      ...prevText,
      [section]: newText[section],
    }));
  };

  const handleMouseLeave = (section) => {
    const originalText = {
      cocina: 'El lugar de<br />los encuentros',
      jardin: 'Casa en<br />el corazón',
      escaleras: 'Para ojos<br />visitantes',
      cuarto: 'Hablando con<br />la almohada'
    };
    setText((prevText) => ({
      ...prevText,
      [section]: originalText[section],
    }));
  }; 

  // Navegación
  const navigateTo = (path) => {
    navigate(path);  
  };

  return (
    <div className="menu-container">
      <img src={casa} alt="Casa" className="background-image" />
      <div className="menu-items">
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
      </div>
    </div>
  );
  
  
}

export default Menu;
