import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/escaleras.css';
import photo from '../../images/_DSC0002-Enhanced-NR.jpg';
import photo2 from '../../images/imagenportada1.jpg';
import photomini from '../../images/minisara.jpg';
import BackButton from '../BackButton';
import estanteria from '../../images/estante.png';

function Escaleras() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // Estado para el modal del reel

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const goToCarousel = (type) => {
    navigate(`/carousel/${type}`); // Navegar al carrusel con un parámetro
  };

  return (
    <div className="escaleras-container">
      <BackButton />
      {/* Texto descriptivo */}
      <div className="text-block">
        <p>Plano: Medio Corto.</p>
        <p>Locación: El Porvenir</p>
        <p>Corte de pelo: El terrible honguito.</p>
        <p>Ropa: Overol beige y camisa de rayas multicolores.</p>
        <p>Probablemente descalza.</p>
        <p>Tomada por: Papá</p>
        <p>Foto favorita de: Mamá</p>
        <p>Sonrisa: Inmensa</p>
        <p>Nariz:</p>
        <p>...</p>
        <p>¿Nariz? </p>
        <p>…....</p>
        <p>¡Nariz!</p>
      </div>

      <div className="text-block-2">
        <p>Agh... llena de mocos y tierra.</p>
        <p>
          Mi mamá dice que si esa foto tuviera nombre sería “la infancia de Sara
          Lucía”. Antes la odiaba, “¡qué vergüenza!”, pensaba. Ahora yo también
          la amo. Siento que siempre hablo de lo mismo; rodar la montaña, el aire
          frío, trepar los árboles, correr descalza y jugar a la princesa. De las
          pinturas hechas con flores y las sopas de pasto. De los perros, ovejas,
          vacas, conejos, saltamontes y ranas. Un día que estuviese lleno de eso,
          ése y solo ése era el tipo de día perfecto, que solo podía culminar con
          el cuentico de las buenas noches. No me gustan las fotos, pero se
          convierten en tesoros para los días grises aquellas donde se escapa
          “Uuusha”, la de los pies sucios y la nariz llenita de mocos y tierra. Me
          alegra no haber cambiado tanto.
        </p>
        <p>¿La ves?</p>
      </div>

      <div className="descriptions">
        <p className="descriptions">Reel</p>
      </div>

      <div className="descriptions2">
        <p className="descriptions2">Fotos escena</p>
      </div>

      <div className="descriptions3">
        <p className="descriptions3">Fotos en estudio</p>
      </div>

      <img
        src={photomini}
        alt="Foto de las escaleras"
        className="masked-imageMini"
      />

      <img
        src={estanteria}
        alt="Foto de las escaleras"
        className="estantep"
      />

      {/* Imagen con máscara */}
      <div className="media-wrapper">
        <img
          src={photo}
          alt="Foto de las escaleras"
          className="masked-image"
          onClick={() => goToCarousel('scene')}
        />

        <img
          src={photo2}
          alt="Foto de las escaleras"
          className="masked-image-scene"
          onClick={() => goToCarousel('studio')}
        />

        {/* Reel de YouTube */}
        <div className="masked-video" onClick={openModal}>
          <iframe
            width="325"
            height="257"
            src="https://www.youtube.com/embed/B0NC6kuCmbg"
            title="Reel Final Sara Lucía"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal para el reel */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/B0NC6kuCmbg"
              title="Reel Final Sara Lucía"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Escaleras;
