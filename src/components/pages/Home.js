import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import portadaimage from '../../images/IMG_7031.jpg';
import gardenplant from '../../images/arbustos.png'
import cloud from '../../images/nube.png';

const Home = () => {
  const navigate = useNavigate();
  const [isZooming, setIsZooming] = useState(false);

  const handleClick = () => {
    setIsZooming(true); 
    setTimeout(() => {
      navigate("/jardin"); 
    }, 800); 
  };

  return (
    <div className="home-container">
      {/* Imagenes extra */}
      <img src={gardenplant} className="arbustos-image"></img>
      <div className="cloudy-container">
        <img src={cloud} className="cloudy cloud-1" alt="Cloud 1" />
        <img src={cloud} className="cloudy cloud-2" alt="Cloud 2" />
        <img src={cloud} className="cloudy cloud-3" alt="Cloud 3" />
        <img src={cloud} className="cloudy cloud-4" alt="Cloud 4" />
        <img src={cloud} className="cloudy cloud-5" alt="Cloud 5" />
      </div>
      <div className="home-image-container">
        <img
          src={portadaimage}
          alt="Sara Lucía Rivera Castro"
          className="home-image"
        />
        <div className="home-overlay">
          <div className="home-overlay-text">
            <h1>Sara Lucía Rivera Castro</h1>
            <h2>Artista y Tejedora Escénica</h2>
            <p>Hilos de poesía y movimiento</p>
          </div>
        </div>
      </div>

      {/* Contenido en dos columnas */}
      <div className="home-columns">
        <div className="home-column">
          <h3>Declaración de una artista y tejedora escénica</h3>
          <p>
            Mi primer atrevimiento será declararme artista; artista y tejedora
            escénica. El segundo será declarar que lo que hago a través de la
            poesía y el movimiento, es un arte llenito de luz.
          </p>
          <p>
            Soy vehículo expresivo. Voz que carga una manada que resuena,
            retumba, abarca, dilata y vibra; trabajo con los objetos como
            narradores y posibilidad imaginativa; enlazando textos, míos y
            ajenos, en el intento de descifrar los adentros; y en colectividad
            porque es aquella que, como una casa, nos sostiene.
          </p>
        </div>
        <div className="home-column">
          <p>
            <i>
              Habitamos una misma plural, múltiple, diversa casa amarilla con
              raíces y alas, sin paredes, y con un hermoso jardín. Yo casa,
              territorio casa, planeta casa, universo casa. Escena casa.
            </i>
          </p>
          <p>
            Por eso hago arte. Porque creo plenamente en él como aquello capaz
            de recordarnos que pertenecemos a la vida, y no lo contrario, y por
            mantener viva la sensibilidad humana, reverberando, pequeña como el
            aleteo de la mariposa, pero provocando cambios profundos en quienes
            lo hacemos, y sembrando fisuras, uniones y transformaciones en la
            estructura humana y su relación con la vida.
          </p>
        </div>
      </div>

      <div className="home-button-container">
        <button
          className="home-button"
          onClick={handleClick}
        >
          Ir al Portafolio...Mi Casa
        </button>
      </div>
    </div>
  );
};

export default Home;
