import React, { useState, useEffect } from 'react';
import '../styles/cocina.css';
import cocinabg from '../../images/Cocina.jpg'

const Cocina = () => {
  // Definición de `textBlock` para cada zona
  const textBlockZona1 = [
    { title: "", content: "<br></br><br></br>Recuerdo una vez que mi mamá me explicaba el por qué el mesón está alrededor del horno, y es porque el hogar se hace alrededor del fuego. Es algo que nunca se me va a olvidar.<br/><br/><br/><br/>A la mesa se encuentran<br/><br/>Angie y Nicolás;<br/><br/>Sofía, Maria Adelaida y Fernando.<br><br/><br><br/><br><br/><br><br/>" }
  ];
  
  const textBlockZona2 = [
    { title: "Título Zona 2", content: "Contenido del texto para la zona 2 - Página 1" },
    { title: "Título Zona 2", content: "Contenido del texto para la zona 2 - Página 2" },
  ];
  
  const textBlockZona3 = [
    { title: "Autora: María Adelaida Palacio", content: "<b>Caminar la Creación</b><br/><br/>Hace varios años conocí a Sara Lucía y durante su carrera he tenido la inmensa alegría de contar con ella en varios de mis cursos.  En ciclo básico en Elementos de la puesta en escena II y luego en el ciclo profesional tomó la Puesta en escena de dramaturgias, fue monitora varias veces de mis cursos, participó en el ensamble interdisciplinar “Un hombre lleno de agua por dentro”, estuvo en el Laboratorio de composición a partir del texto dramático “Incendies” y además participó en el único ensamble de escrituras que acompañé.<br/><br/>A Sara he tenido la fortuna de conocerla, de acompañarla y caminar cerca de ella.<br/><br/><i>Sara camina largos trechos.</i><br/><br/><i>Con calma y gozo.</i>" },
    { title: "", content: "En cada encuentro, ella ha sido raíz, puente, conversación. Ella desde su manera de habitar el mundo, habilita la creación para todas quienes hemos tenido la posibilidad de imaginar a su lado universos poéticos.<br/><br/><i>Sara es lugar de encuentro</i>.<br><br/>No se puede hablar de su trabajo, el cual es maravilloso, técnico, consciente, propositivo, sin acercarse a su universo interior. Universo poético y feroz. En donde la belleza y lo político en cada accionar dan cuenta de su mirada aguda sobre lo femenino, la ciudad, la familia y la tierra.  Creería que sobre todo la idea de la mujer y el territorio ancestral es una idea que la atraviesa de manera profunda.<br><br/>Hago un paréntesis: durante los últimos años en mis espacios de docencia intento crear un espacio en donde los mundos interiores de cada una de las estudiantes encuentren un lugar, un espacio, un cauce y se desborden de alguna manera.  Es un proceso que requiere tiempo y" },
    { title: "", content: "espacio, requiere calma y además un sostenimiento particular. Sin duda compartir con Sara está práctica la atesoro porque con ella he podido caminar infinidad de preguntas y de estrategias alrededor esa investigación que nos lleva tan adentro de nosotras.<br><br/><i>(En este escrito hablaré de nosotras, de Sara, de mí y de tantas otras)</i><br><br/>Ahora regresemos al paisaje interior de Sara, un lugar habitable para todas nosotras, lleno de amor, de diálogo, de conversación, de sostenimiento y de un profundo respeto por imaginar la creación como un lugar amoroso, respetuoso y común. Sobre esto quiero ampliarme, raras veces una artista joven comprende en el hacer diario la idea de lo común, no como un discurso, sino como un accionar de todos los días, como un acto político. Desde esa belleza y calma, desde esa profundidad y liviandad Sara se construye en cada accionar cotidiano como una mujer política dispuesta a alzar su voz y construir espacios para todas" },
    { title: "", content: "nosotras.<br><br/>En cada manera de acercarse a la creación tiene la valentía de contener su universo y no teme a prestarlo, a dejarse ir o mostrarse en ese rio desbordado, en esa casa de la infancia, en esa línea ancestral de mujeres que la acompañan, en sus preguntas sobre el cuerpo, la voz, la palabra poética y la política.<br><br/>Acá un poquito de lo que imaginó (y nos contó) sobre su casa de la infancia:<br><br/><i>El porvenir.<br><br/>Mi casa, así se llama.<br><br/>Y este libro lo hicieron porque muchas personas les aconsejaron que deberían contar la historia del Porvenir.<br><br/>Entonces mi mamá empezó a escribir cómo llegaron al" },
    { title: "", content: "<i>porvenir, cómo descubrieron la casa, no sé qué, y pues está como todo. Entonces, esta solía ser la casa antes, como cuando la encontraron por primera vez. Así era la casa antes. Bueno, tienen fotos de todo.</i><br><br/>Caminar la palabra es una consigna con la que los indígenas del país nos invitan a unir el pensamiento y la vida.  Caminar la palabra como una propuesta a ser coherentes, a ser conscientes, a asumir nuestra palabra, a dar cauce a nuestra voz. Se me ocurre pensar entonces que Sara durante estos años ha caminado mucho, y lo ha hecho con coherencia, con conciencia, con determinación y que en ese caminar nos ha invitado a muchas a conocerla, a escucharla, a abrazarla, a crear junto a ella. Sara camina con un grupo enorme de creadoras y nos lleva a lugares potentes de la creación.  Sin duda su paso por la carrera de Artes escénicas es un regalo para todas quienes tuvimos el placer de crear a su lado.<br><br/>" },
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
    <div className={`cocina-container ${currentTextBlock ? 'oscuro' : ''}`}>
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
          <p dangerouslySetInnerHTML={{ __html: currentTextBlock[currentIndex].content }}></p>

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
