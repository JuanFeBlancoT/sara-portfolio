import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/carousel.css';
import photoFlor1 from '../../images/Portafolio-025.jpg';
import photoFlor2 from '../../images/AV2A1849.jpg';
import photoFlor3 from '../../images/AV2A1799-Editar.png';
import photoFlor4 from '../../images/AV2A1872.jpg';
import photoRio1 from '../../images/Portafolio-194.jpg';
import photoRio2 from '../../images/AV2A2080.jpg';
import photoRio3 from '../../images/AV2A2027-Editar.jpg';
import photoRio4 from '../../images/AV2A2106.jpg';
import photoanimal1 from '../../images/Portafolio-102.jpg';
import photoanimal2 from '../../images/AV2A1708-Editar.jpg';
import photoanimal3 from '../../images/AV2A1687-Editar.jpg';
import photoanimal4 from '../../images/AV2A1718-Editar.jpg';
import scenem1_1 from '../../images/DSC_0127-Enhanced-NR.jpg';
import scenem1_2 from '../../images/IMG_1177.jpg';
import scenem1_3 from '../../images/DSC_0434-Enhanced-NR.jpg';
import scenem2_1 from '../../images/_DSC2563-Enhanced-NR.jpg';
import scenem2_2 from '../../images/_DSC2426.jpg';
import scenem2_3 from '../../images/_DSC0130-Enhanced-NR.jpg';
import scenem3_1 from '../../images/_DSC0002-Enhanced-NR.jpg';
import scenem3_2 from '../../images/_DSC0216-Enhanced-NR.jpg';
import scenem3_3 from '../../images/_DSC0568-Enhanced-NR.jpg';
import scenem4_1 from '../../images/Sari lu 1.jpg';
import scenem4_2 from '../../images/Sari Lu 12.jpg';
import scenem4_3 from '../../images/Sari Lu 8.jpg';
import scenem4_4 from '../../images/Sari Lu Ñapa.jpg';
import scenem5_1 from '../../images/_DSC7076-Enhanced-NR.jpg';
import scenem5_2 from '../../images/_DSC8162-Enhanced-NR.jpg';
import scenem5_3 from '../../images/_DSC6784-Enhanced-NR.jpg';

function Carousel() {
  const { type } = useParams(); // Obtiene el tipo desde la URL
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice del carrusel

  // Datos para los carruseles
  const slides = {
    scene: [
      {
        title: 'Aguacerito',
        group: 'Ensamble de Danza Tradicional',
        director: 'Dirige René Arriaga',
        year: '2021',
        images: [scenem1_1, scenem1_2, scenem1_3],
      },
      {
        title: 'Para Bellum',
        group: 'Ensamble Interdisciplinar',
        director: 'Dirige Elena Steremberg',
        year: '2022',
        images: [scenem2_1, scenem2_2, scenem2_3],
      },
      {
        title: 'Quien Me Navega es el Mar',
        group: 'Ensamble de Acciones Físicas',
        director: 'Dirige Fernando Montes',
        year: '2022',
        images: [scenem3_1, scenem3_2, scenem3_3],
      },
      {
        title: 'Mi Amigo de Cristal',
        group: 'Ensamble de Teatro Gestual',
        director: 'Dirige Leonardo Martínez',
        year: '2023',
        images: [scenem4_1, scenem4_2, scenem4_3, scenem4_4],
      },
      {
        title: 'Grito de Un Hombre Lleno de Agua por Dentro',
        group: 'Ensamble de Teatro y Danza',
        director: 'Dirigen Maria Adelaida Palacio y Arnulfo Pardo',
        year: '2023',
        images: [scenem5_1, scenem5_2, scenem5_3],
      },
    ],
    studio: [
      {
        title: 'Flor',
        images: [photoFlor1, photoFlor2, photoFlor3, photoFlor4],
      },
      {
        title: 'Río',
        images: [photoRio1, photoRio2, photoRio3,photoRio4],
      },
      {
        title: 'Animal',
        images: [photoanimal1, photoanimal2, photoanimal3, photoanimal4],
      }],
  };

  const currentSlides = slides[type] || []; // Obtener el tipo correcto de carrusel

  // Funciones para navegar entre momentos
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSlides.length);
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentSlides.length - 1 : prevIndex - 1
    );
  };

  // Render del momento actual
  const currentMoment = currentSlides[currentIndex];

  return (
    <div className={`carousel-container ${type}`}>
      {/* Botón para volver */}
      <button onClick={() => navigate(-1)} className="back-button">
        Volver
      </button>

      {/* Contenido del carrusel */}
      {currentMoment && (
        <div className="moment-container">
          <h2>{currentMoment.title}</h2>

          {/* Textos adicionales para "scene" */}
          {type === 'scene' && (
            <>
              <p>{currentMoment.group}</p>
              <p>{currentMoment.director}</p>
              <p>Año: {currentMoment.year}</p>
            </>
          )}

          {/* Imágenes */}
          <div className="images">
            {currentMoment.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>
      )}

      {/* Botones de navegación */}
      <div className="navigation-buttons">
        <button onClick={goBack}>← Retroceder</button>
        <button onClick={goNext}>Avanzar →</button>
      </div>
    </div>
  );
}

export default Carousel;
