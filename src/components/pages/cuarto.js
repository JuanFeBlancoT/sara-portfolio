import React, { useState, useEffect } from 'react';
import "../styles/cuarto.css"; // Asegúrate de tener los estilos adecuados para las imágenes, brillos y textos.
import bgcuarto from "../../images/Cuarto.jpg";
import brillo from "../../images/brillo.png";
import openBook from "../../images/libro_cuarto.png";

const Cuarto = () => {
  const [isDark, setIsDark] = useState(false); // Para oscurecer el fondo
  const [showBook, setShowBook] = useState(false); // Para mostrar el libro abierto
  const [showGlow, setShowGlow] = useState(false); // Para mostrar el brillo

  useEffect(() => {
    // Al cargar la página, después de 2 segundos, pasa al estado oscuro con el libro y el texto.
    const timer = setTimeout(() => {
      setIsDark(true);
      setShowBook(true);
    }, 2000);

    // Limpia el temporizador cuando se desmonte el componente
    return () => clearTimeout(timer);
  }, []);

  // Manejador para oscurecer el fondo y mostrar el libro
  const handleZoneClick = () => {
    setIsDark(true);
    setShowBook(true);
  };

  // Manejador para volver al estado inicial al hacer clic fuera del libro
  const handleBackgroundClick = () => {
    if (showBook) {
      setIsDark(false);
      setShowBook(false);
    }
  };

  return (
    <div 
      className={`room-container ${isDark ? 'dark' : ''}`} // Condicional para el fondo oscuro
      onClick={handleBackgroundClick}
    >
      <img 
        src={bgcuarto} 
        alt="Room" 
        className="room-background" 
      />

      {/* Capa oscura que se superpone al fondo */}
      <div className={`dark-overlay ${isDark ? 'active' : ''}`}></div>


      <div 
        className="interactive-zone" 
        onMouseEnter={() => setShowGlow(true)} 
        onMouseLeave={() => setShowGlow(false)} 
        onClick={handleZoneClick}
      >
        {showGlow && (
          <img src={brillo} alt="Glow" className="glow-image" />
        )}
      </div>

      {showBook && (
        <div className="book-container">
          <div className="book-text">
            <h3>Hablando con la Almohada</h3>
            <p>Revolcada y esculcada hasta en sus últimas grietas está mi habitación. Los duendes malos han entrado, pero no se llevaron nada de valor.</p>
            <p>Esculcadas mis intimidades y recuerdos, manoseados todos y cada uno de mis tesoros. Abandonados en el frío del suelo mis cuentos, el vestido con el que aprendí a volar, las cartas de amor y mis conversaciones de antaño cuando le llamaba “Dios”. Mis muñequitos quitapesares despojados de su cama, y los colibríes de origami que contemplaban el desastre desde la ventana.</p>
            <p>¿Por qué fueron rechazados y reducidos a chatarra los más valiosos caudales?</p>
            <p>Si yo fuera de aquellos, sería como una mariposa atraída por todo lo que tuviese colores, leería las cartas, diarios y me llevaría las artesanías, y mi casa se volvería museo de recuerdos secuestrados.</p>
            <p>Me hallo en contradicción de desapego y duelo porque el día que yo muera todo será lanzado al relleno, refundido en asquerosos aromas pues ya no habrá nadie que les de profundo afecto.</p>
            <p>No me tiren. Repártanme entre la gente para habitar nuevos lugares. Que mi ser, contraído en mi cuarto se despliegue por casas y barrios, que lleguen mis tesoros a los cerros y páramos, carnavales y ríos. Que se hundan con los peces hasta lo más oscuro, y vuelvan en forma de jardines a la superficie.</p>
          </div>
          <img src={openBook} alt="Book" className="book-image" />
          
        </div>
      )}
    </div>
  );
};

export default Cuarto;
