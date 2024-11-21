import React from 'react';

const CarouselMoment = ({ title, group, director, year, images }) => {
  return (
    <div style={styles.momentContainer}>
      {/* Información textual */}
      <div style={styles.textContainer}>
        <h2>{title}</h2>
        <p>{group}</p>
        <p>Dirige {director}</p>
        <p>{year}</p>
      </div>

      {/* Imágenes */}
      <div style={styles.imageContainer}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Imagen ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

// Estilos
const styles = {
  momentContainer: {
    marginBottom: '50px', // Separación entre momentos
  },
  textContainer: {
    marginBottom: '20px', // Separación entre texto e imágenes
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.5',
    color: '#000', // Cambiar según el diseño
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    width: '30%', 
    height: 'auto',
    borderRadius: '5px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default CarouselMoment;
