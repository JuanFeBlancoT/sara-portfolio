import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/jardin.css';
import jardinImage from '../../images/jardin-casa.jpeg';

function Jardin() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMoment, setCurrentMoment] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);

      // Definimos los rangos de scroll para cada momento
      if (scrollY >= 0 && scrollY < 500) {
        setCurrentMoment(1); // Nuevo primer momento, sin texto
      } else if (scrollY >= 500 && scrollY < 1000) {
        setCurrentMoment(2); // El antiguo momento 1
      } else if (scrollY >= 1000 && scrollY < 1500) {
        setCurrentMoment(3);
      } else if (scrollY >= 1500 && scrollY < 2000) {
        setCurrentMoment(4);
      } else if (scrollY >= 2000 && scrollY < 2500) {
        setCurrentMoment(5);
      } else if (scrollY >= 2500 && scrollY < 3000) {
        setCurrentMoment(6);
      } else if (scrollY >= 3000 && scrollY < 3500) {
        setCurrentMoment(7);
      } else if (scrollY >= 3500) {
        setCurrentMoment(8);
        // Si llega al último momento y se sigue haciendo scroll, redirigimos al menú
        if (scrollY >= 3500) {
          navigate('/');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  // Valores de transformación para cada momento
  const transformValues = [
    { scale: 1, translateX: 0, translateY: 0 },     // Nuevo momento 1 (sin texto)
    { scale: 2.2, translateX: -300, translateY: -195 }, // El antiguo momento 1
    { scale: 2.3, translateX: 300, translateY: -195 },
    { scale: 2.3, translateX: 300, translateY: -30 },
    { scale: 2.3, translateX: -100, translateY: -30 },
    { scale: 2.3, translateX: -200, translateY: 200 },
    { scale: 2.3, translateX: 300, translateY: 200 },
  ];

  const currentTransform = transformValues[currentMoment - 1];

  return (
    <div className="zoom-container">
      <div
        className="background"
        style={{
          transform: `scale(${currentTransform.scale}) translate(${currentTransform.translateX}px, ${currentTransform.translateY}px)`,
          transition: 'transform 0.8s ease-in-out', // Suaviza el movimiento
        }}
      >
        <img src={jardinImage} alt="Jardín" className="background-image" />
        {/* El texto solo comienza desde el momento 2 */}
        {currentMoment >= 2 && (
          <div className={`text moment-1 ${currentMoment === 2 ? 'visible' : 'hidden'}`}>
            Esta es la casa
          </div>
        )}
        {currentMoment >= 3 && (
          <div className={`text moment-2 ${currentMoment === 3 ? 'visible' : 'hidden'}`}>
            Aquí, donde se enciende<br/>voluntariamente el fuego,<br/>habita lo querido
          </div>
        )}
        {currentMoment >= 4 && (
          <div className={`text moment-3 ${currentMoment === 4 ? 'visible' : 'hidden'}`}>
            Se hacen visibles<br/>fragmentos de mi alma<br/>en este rincón del mundo
          </div>
        )}
        {currentMoment >= 5 && (
          <div className={`text moment-4 ${currentMoment === 5 ? 'visible' : 'hidden'}`}>
            al que puedo llamar mío<br/>y llamarme suyo
          </div>
        )}
        {currentMoment >= 6 && (
          <div className={`text moment-5 ${currentMoment === 6 ? 'visible' : 'hidden'}`}>
            La Casa es un puente<br/>entre usted, yo, y ella
          </div>
        )}
        {currentMoment >= 7 && (
          <div className={`text moment-6 ${currentMoment === 7 ? 'visible' : 'hidden'}`}>
            Todo es ahora<br/>adentro<br/>y afuera
          </div>
        )}
        {currentMoment === 8 && (
          <div className={`text moment-7 ${currentMoment === 8 ? 'visible' : 'hidden'}`}>
            Momento 7: Tips finales
          </div>
        )}
      </div>
      {/* Este div aumenta la altura total para permitir scroll */}
      <div style={{ height: '4500px' }}></div>
    </div>
  );
}

export default Jardin;
