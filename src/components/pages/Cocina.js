import React, { useState, useEffect } from 'react';
import '../styles/cocina.css';
import cocinabg from '../../images/Cocina.jpg'

const Cocina = () => {
  // Definición de `textBlock` para cada zona
  const textBlockZona1 = [
    { title: "Título Zona 1", content: "Contenido del texto para la zona 1 - Página 1" },
    { title: "Título Zona 1", content: "Contenido del texto para la zona 1 - Página 2" },
  ];
  
  const textBlockZona2 = [
    { title: "Título Zona 2", content: "Contenido del texto para la zona 2 - Página 1" },
    { title: "Título Zona 2", content: "Contenido del texto para la zona 2 - Página 2" },
  ];
  
  const textBlockZona3 = [
    { title: "Título Zona 3", content: "Contenido del texto para la zona 3 - Página 1" },
    { title: "Título Zona 3", content: "Contenido del texto para la zona 3 - Página 2" },
  ];

  const textBlockZona4 = [
    { title: "Título Zona 4", content: "Contenido del texto para la zona 4 - Página 1" },
    { title: "Título Zona 4", content: "Contenido del texto para la zona 4 - Página 2" },
  ];

  const textBlockZona5 = [
    { title: "Título Zona 5", content: "Contenido del texto para la zona 5 - Página 1" },
    { title: "Título Zona 5", content: "Contenido del texto para la zona 5 - Página 2" },
  ];

  const textBlockZona6 = [
    { title: "Título Zona 6", content: "Contenido del texto para la zona 6 - Página 1" },
    { title: "Título Zona 6", content: "Contenido del texto para la zona 6 - Página 2" },
  ];

  const [currentTextBlock, setCurrentTextBlock] = useState(null); // Estado del `textBlock` actual
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para la página actual del `textBlock`

  // Función para abrir el libro con el `textBlock` específico
  const openBookWithTextBlock = (textBlock) => {
    setCurrentTextBlock(textBlock);
    setCurrentIndex(0); // Reiniciar al primer contenido
  };

  // Función para cerrar el libro y restablecer fondo
  const closeBook = () => {
    setCurrentTextBlock(null);
  };

  // Funciones para navegar entre los contenidos del `textBlock`
  const handleNext = () => {
    if (currentTextBlock && currentIndex < currentTextBlock.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTextBlock && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={`cocina ${currentTextBlock ? 'oscuro' : ''}`}>
      <img src={cocinabg  } alt="Cocina de fondo" className='cocina-bg'/>

      {/* Zonas sensibles */}
      <div onClick={() => openBookWithTextBlock(textBlockZona1)} className="zona zona1"></div>
      <div onClick={() => openBookWithTextBlock(textBlockZona2)} className="zona zona2"></div>
      <div onClick={() => openBookWithTextBlock(textBlockZona3)} className="zona zona3"></div>
      <div onClick={() => openBookWithTextBlock(textBlockZona4)} className="zona zona4"></div>
      <div onClick={() => openBookWithTextBlock(textBlockZona5)} className="zona zona5"></div>
      <div onClick={() => openBookWithTextBlock(textBlockZona6)} className="zona zona6"></div>

      {/* Visualización del libro */}
      {currentTextBlock && (
        <div className="libro">
          <span className="cerrar" onClick={closeBook}>X</span>
          <h3>{currentTextBlock[currentIndex].title}</h3>
          <p>{currentTextBlock[currentIndex].content}</p>

          {/* Navegación entre contenidos */}
          <div className="navegacion">
            <span 
              onClick={handlePrevious} 
              className={`nav-text ${currentIndex === 0 ? 'disabled' : ''}`}
            >
              Regresar
            </span>
            <span>{`${currentIndex + 1} / ${currentTextBlock.length}`}</span>
            <span 
              onClick={handleNext} 
              className={`nav-text ${currentIndex === currentTextBlock.length - 1 ? 'disabled' : ''}`}
            >
              Continuar
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cocina;
