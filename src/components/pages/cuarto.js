import React, { useState, useEffect } from 'react';
import "../styles/cuarto.css"; 
import bgcuarto from "../../images/Cuarto.jpg";
import brillo from "../../images/brillo.png";
import openBook from "../../images/libro_cuarto.png";

const textBlocks = [
  {
    title: "Hablando con la Almohada",
    paragraphs: [
      "Revolcada y esculcada hasta en sus últimas grietas está mi habitación. Los duendes malos han entrado, pero no se llevaron nada de valor.",
      "Esculcadas mis intimidades y recuerdos, manoseados todos y cada uno de mis tesoros. Abandonados en el frío del suelo mis cuentos, el vestido con el que aprendí a volar, las cartas de amor y mis conversaciones de antaño cuando le llamaba 'Dios'. Mis muñequitos quitapesares despojados de su cama, y los colibríes de origami que contemplaban el desastre desde la ventana.",
      "¿Por qué fueron rechazados y reducidos a chatarra los más valiosos caudales?",
      "Si yo fuera de aquellos, sería como una mariposa atraída por todo lo que tuviese colores, leería las cartas, diarios y me llevaría las artesanías, y mi casa se volvería museo de recuerdos secuestrados.",
      "Me hallo en contradicción de desapego y duelo porque el día que yo muera todo será lanzado al relleno, refundido en asquerosos aromas pues ya no habrá nadie que les de profundo afecto.",
      "No me tiren. Repártanme entre la gente para habitar nuevos lugares. Que mi ser, contraído en mi cuarto se despliegue por casas y barrios, que lleguen mis tesoros a los cerros y páramos, carnavales y ríos. Que se hundan con los peces hasta lo más oscuro, y vuelvan en forma de jardines a la superficie."
    ]
  },
  {
    title: "Autoevaluación: Hilos, nudos y desenlaces de mis andares",
    paragraphs: [
      "Quizás el día en que un profesor me dijo “¿y por qué no teatro?” descubrí que había asumido como algo que haría el resto de mi vida ese oficio que ni siquiera sabía podía considerarse una “carrera”. Siempre me he caracterizado por mi determinación y disciplina. Cuando tomo una decisión, me involucro completamente, y a mis dieciséis años ya la había tomado: iba a ser actriz y socióloga. Sí. Las dos. No la una, no la otra, ambas. La búsqueda se complicó cuando descubrí que universidades como la Universidad Nacional o los Andes no ofrecían teatro, y que en las universidades donde sí estaban las dos carreras, como la Pedagógica y la Distrital, no había posibilidad de hacer doble programa.",
      "Me sorprendió que, independientemente del carácter público o privado de las instituciones de educación superior, en Colombia hasta ahora damos valor, no sólo lo interdisciplinario,  sino a las ciencias sociales y por sobre todo a las artes como profesión. La jerarquización positivista de los saberes ha discriminado todo lo que no esté relacionado con nuestra cabeza lógico racional, y al salir de la burbuja de un colegio jesuita, cuyo modelo educativo tiene una visión un poco más integral, me hice consciente de que ese no es el modelo general de mi realidad occidentalizada.",
    ]
  },
  {
    title: "",
    paragraphs: [
      "La última universidad a la que nos llevó el colegio en el recorrido por las ferias de Universidades fue la javeriana… mi última esperanza. Mi mejor amiga me acompañó a ver a “Los perros de la Impro” en una carpa, y pasados unos cuantos minutos, la miré con lágrimas en los ojos y le dije “la encontré”, y ella también lo supo. “Te veo aquí”, dijo en un abrazo que todavía me cobija. Jamás voy a olvidar ese día.",
      "Si conocerse es viajar como una araña por los hilos de ésta trama de miles de inicios, nudos y desenlaces que se amarran con otros inicios, esta autoevaluación será eso. Un viaje consciente, crítico y reflexivo, a través de bitácoras y recuerdos en torno a los acontecimientos del día a día de una artista quien, como dice Maillard Chantal, es una soñadora que quiere saber qué se le oculta, y dialoga con esos instantes que parecen encapsular el sentido."
    ]
  },
  {
    title:"Alfarera, derrúmbame y vuelve a armarme:",
    paragraphs: [
      "Comencé la carrera el segundo semestre del 2019, y desde el primer día supe  que iba a atravesarme de cabo a rabo. El ciclo básico fue un lugar de descubrimiento fascinantemente aterrador. Fue encontrarme con que, si bien creía que tenía unas bases, nada de lo que había hecho tenía un enfoque somático. Pasar de creer que “tengo un cuerpo”, a entenderme como cuerpo, me obligaba a salir de la forma para bucear en las profundidades del ser. Recuerdo mucho la sensación del viento en mis dedos sudorosos y dilatados, hinchados de consciencia.",
      "“Es un proceso de autoconocimiento, entrenamiento, encuentro con el otro, escucha, estar presente, salir de la zona de confort que para mí no ha sido fácil. He sentido frustración, tristeza, agotamiento, inseguridad y miedo como nunca antes en la que se suponía era mi área fuerte. Tengo que aprender a confiar en mí. Tengo que soltarme y olvidar que me miran.” (Bitácora Personal, 6 de septiembre del 2019)",
      "Los artistas sabemos de primera mano lo que la sociología del cuerpo y de las emociones investiga a través de la observación en tercera persona; el contexto social, cultural, político, económico, religioso, etc. configura y afecta el pensamiento, sentimientos, simbolización del mundo y el cuerpo de las personas. Se imprime, literalmente, en los huesos y el cerebro."
    ]
  },
  {
    title: "",
    paragraphs: [
      " Como cuerpo soy mapa de mi contexto. Autoconocerme ese primer año implicó estar de frente a mis capacidades y limitaciones, a una voz adiestrada, a mis hábitos, mis pensamientos y juicios, a la vergüenza y, sobre todo, al miedo.",
      "Viajando hacia dentro de mí misma me hice cada vez más consciente de la sociedad que me formó: una donde sientes miedo de las demás personas, donde tu voz está siendo constantemente juzgada y silenciada. Donde lo introvertido, lo no normativo, lo demasiado colorido, lo no racional, lo demasiado ingenuo o tierno no tiene posibilidades de sobrevivir. Las dinámicas de poder tienen su origen en la vergüenza, pues la hegemonía infantil, pasa de llamarlo “rareza”, “friki”, “tonto” a llamarlo subnormal, atrasado, subdesarrollado.",
      "“Querida actuación: Tenía miedo, muchísimo miedo. Pasadas 7 semanas de comenzar la carrera es la primera vez que puedo decir que siento que me dejas algo de dignidad. Me he sentido humillada, ignorada, aplastada y vulnerable. Petrificada. Hoy me reivindico, no por ti, porque sigues siendo igual de dura que ayer, sino porque me siento más fuerte. Estoy mamada de sentirme aterrada todo el tiempo. No quiero temerte(me) nunca más.” (Bitácora Personal, 30 de agosto del 2019)",
      "Sin embargo, a medida que fuí avanzando en las clases de principios de actuación, somática, danza y elementos de la puesta en escena, conocí a personas como Sofía Monsalve, Brunilda Zapata, Isabel Story, Emilsen Rincón, Rafael Nieves y Romina Guarísma que se esmeran en construir, a través de la disciplina y el respeto por esta profesión y"
    ]
  },
  {
    title: "",
    paragraphs: [
      "quienes la aman, un refugio para lo diverso. Estar en terrenos exigentemente amorosos del oficio de la escena, donde nos enseñaron que la vulnerabilidad es un tesoro sagrado que aprendemos a cuidar, y que la energía colectiva es más importante que la expresión individual, me invitaba por primera vez a equivocarme y ser genuinamente desnudada. Comprendí que no tenía que vencer el miedo, sino convertirlo en aliado.",
      "Reconocerme como ser cambiante, móvil, me hizo entender que ser juiciosa y seguir las reglas no era lo mismo que ser disciplinada, y que, además, no me funcionaría si quería ser artista. Con Sofía Monsalve aprendí que no puedes temerle al abismo indomable de la posibilidad; incomódate, sal de la zona de confort, juega con el vértigo del desequilibrio. Cuando había logrado desplazar mi relación con el miedo del centro de lo que hacía, noté que todos los principios (Danza, Somática, Actuación y Elementos de la Puesta en Escena) parecían conducir a un mismo espacio habitado por seres presentes en el aquí y ahora, que tienen la capacidad de descentrarse para dialogar consigo mismos, con el espacio y con las demás personas. "
    ]
  }
  // Puedes agregar más bloques de texto aquí.
];

const Cuarto = () => {
  const [isDark, setIsDark] = useState(false); 
  const [showBook, setShowBook] = useState(false); 
  const [showGlow, setShowGlow] = useState(false); 
  const [currentPage, setCurrentPage] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDark(true);
      setShowBook(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleZoneClick = () => {
    setIsDark(true);
    setShowBook(true);
  };

  const handleNext = () => {
    if (currentPage < textBlocks.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCloseBook = () => {
    setIsDark(false);
    setShowBook(false);
    setCurrentPage(0); 
  };

  return (
    <div className={`room-container ${isDark ? 'dark' : ''}`}>
      <img src={bgcuarto} alt="Room" className="room-background" />
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
          <div className="close-zone" onClick={handleCloseBook}>
            X
          </div>
          <div className="book-text">
            <h3>{textBlocks[currentPage].title}</h3>
            {textBlocks[currentPage].paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <img src={openBook} alt="Book" className="book-image" />

          <div className="navigation">
            <span 
              className={`prev ${currentPage === 0 ? 'disabled' : ''}`} 
              onClick={handlePrev}
            >
              Regresar
            </span>
            <span 
              className={`next ${currentPage === textBlocks.length - 1 ? 'disabled' : ''}`} 
              onClick={handleNext}
            >
              Continuar
            </span>
            <div className="page-number">
              Página {currentPage + 1} de {textBlocks.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cuarto;
