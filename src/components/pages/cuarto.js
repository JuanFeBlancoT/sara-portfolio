import React, { useState, useEffect } from 'react';
import "../styles/cuarto.css"; 
import bgcuarto from "../../images/Cuarto.jpg";
import brillo from "../../images/brillo.png";
import openBook from "../../images/libro_cuarto.png";

const textBlocks = [
  {
    content: `
      <h3>Hablando con la Almohada</h3>
      <p>Revolcada y esculcada hasta en sus últimas grietas está mi habitación. Los duendes malos han entrado, pero no se llevaron nada de valor.</p>
      <p>Esculcadas mis intimidades y recuerdos, manoseados todos y cada uno de mis tesoros. Abandonados en el frío del suelo mis cuentos, el vestido con el que aprendí a volar, las cartas de amor y mis conversaciones de antaño cuando le llamaba “Dios”. Mis muñequitos quitapesares despojados de su cama, y los colibríes de origami que contemplaban el desastre desde la ventana.</p>
      <p>¿Por qué fueron rechazados y reducidos a chatarra los más valiosos caudales? </h3>
      <p>Si yo fuera de aquellos, sería como una mariposa atraída por todo lo que tuviese colores, leería las cartas, diarios y me llevaría las artesanías, y mi casa se volvería museo de recuerdos secuestrados.</p>
      <p>Me hallo en contradicción de desapego y duelo porque el día que yo muera todo será lanzado al relleno, refundido en asquerosos aromas pues ya no habrá nadie que les de profundo afecto.>/p>
      <p>No me tiren. Repártanme entre la gente para habitar nuevos lugares. Que mi ser, contraído en mi cuarto se despliegue por casas y barrios, que lleguen mis tesoros a los cerros y páramos, carnavales y ríos. Que se hundan con los peces hasta lo más oscuro, y vuelvan en forma de jardines a la superficie.</p>    
    `
  },
  {
    content: `
      <h3>Autoevaluación: Hilos, nudos y desenlaces de mis andares</h3>
      <p>Quizás el día en que un profesor me dijo “¿y por qué no teatro?” descubrí que había asumido como algo que haría el resto de mi vida ese oficio que ni siquiera sabía podía considerarse una “carrera”. Siempre me he caracterizado por mi determinación y disciplina. Cuando tomo una decisión, me involucro completamente, y a mis dieciséis años ya la había tomado: iba a ser actriz y socióloga. Sí. Las dos. No la una, no la otra, ambas. La búsqueda se complicó cuando descubrí que universidades como la Universidad Nacional o los Andes no ofrecían teatro, y que en las universidades donde sí estaban las dos carreras, como la Pedagógica y la Distrital, no había posibilidad de hacer doble programa.</p>
      <p>Me sorprendió que, independientemente del carácter público o privado de las instituciones de educación superior, en Colombia hasta ahora damos valor, no sólo lo interdisciplinario,  sino a las ciencias sociales y por sobre todo a las artes como profesión. La jerarquización positivista de los saberes ha discriminado todo lo que no esté relacionado con nuestra cabeza lógico racional, y al salir de la burbuja de un colegio jesuita, cuyo modelo educativo tiene una visión un poco más integral, me hice consciente de que ese no es el modelo general de mi realidad occidentalizada</p>
      <p>La última universidad a la que nos llevó el colegio en el recorrido por las ferias de Universidades fue</p>
      <p> la javeriana… mi última esperanza. Mi mejor amiga me acompañó a ver a “Los perros de la Impro” en una carpa, y pasados unos cuantos minutos, la miré con lágrimas en los ojos y le dije “la encontré”, y ella</p>
    `
  },
  {
    content: `
      <p>también lo supo. “Te veo aquí”, dijo en un abrazo que todavía me cobija. Jamás voy a olvidar ese día.</p>
      <p>Si conocerse es viajar como una araña por los hilos de ésta trama de miles de inicios, nudos y desenlaces que se amarran con otros inicios, esta autoevaluación será eso. Un viaje consciente, crítico y reflexivo, a través de bitácoras y recuerdos en torno a los acontecimientos del día a día de una artista quien, como dice Maillard Chantal, es una soñadora que quiere saber qué se le oculta, y dialoga con esos instantes que parecen encapsular el sentido.</p>
      <br></br>
      <h3>Alfarera, derrúmbame y vuelve a armarme:</h3>
      <p>Comencé la carrera el segundo semestre del 2019, y desde el primer día supe  que iba a atravesarme de cabo a rabo. El ciclo básico fue un lugar de descubrimiento fascinantemente aterrador. Fue encontrarme con que, si bien creía que tenía unas bases, nada de lo que había hecho tenía un enfoque somático. Pasar de creer que “tengo un cuerpo”, a entenderme como cuerpo, me obligaba a salir de la forma para bucear en las profundidades del ser. Recuerdo mucho la sensación del viento en mis dedos sudorosos y dilatados, hinchados de consciencia.</p>
      <p><i>“Es un proceso de autoconocimiento, entrenamiento, encuentro con el otro, escucha, estar presente, salir de</i></p>
    `
  },
  {
    content: `
    <p><i> la zona de confort que para mí no ha sido fácil. He sentido frustración, tristeza, agotamiento, inseguridad y miedo como nunca antes en la que se suponía era mi área fuerte. Tengo que aprender a confiar en mí. Tengo que soltarme y olvidar que me miran.” (Bitácora Personal, 6 de septiembre del 2019)</i></p>
    <p>Los artistas sabemos de primera mano lo que la sociología del cuerpo y de las emociones investiga a través de la observación en tercera persona; el contexto social, cultural, político, económico, religioso, etc. configura y afecta el pensamiento, sentimientos, simbolización del mundo y el cuerpo de las personas. Se imprime, literalmente, en los huesos y el cerebro. Como cuerpo soy mapa de mi contexto. Autoconocerme ese primer año implicó estar de frente a mis capacidades y limitaciones, a una voz adiestrada, a mis hábitos, mis pensamientos y juicios, a la vergüenza y, sobre todo, al miedo.</p>
    <p>Viajando hacia dentro de mí misma me hice cada vez más consciente de la sociedad que me formó: una donde sientes miedo de las demás personas, donde tu voz está siendo constantemente juzgada y silenciada. Donde lo introvertido, lo no normativo, lo demasiado colorido, lo no racional, lo demasiado ingenuo o tierno no tiene posibilidades de sobrevivir. Las dinámicas de poder tienen su origen en la vergüenza, pues la hegemonía infantil, pasa de llamarlo “rareza”, “friki”, “tonto” a llamarlo subnormal, atrasado, subdesarrollado.</p>
    <p><i>“Querida actuación: Tenía miedo, muchísimo miedo. Pasadas 7 semanas de comenzar la carrera es la primera vez que puedo decir que siento que me dejas algo de dignidad. Me he sentido humillada, ignorada, aplastada y</p></i>
    `
  },
  {
    content: `
    <p><i>vulnerable. Petrificada. Hoy me reivindico, no por ti, porque sigues siendo igual de dura que ayer, sino porque me siento más fuerte. Estoy mamada de sentirme aterrada todo el tiempo. No quiero temerte(me) nunca más.” (Bitácora Personal, 30 de agosto del 2019)</i></p>
    <p>Sin embargo, a medida que fuí avanzando en las clases de principios de actuación, somática, danza y elementos de la puesta en escena, conocí a personas como Sofía Monsalve, Brunilda Zapata, Isabel Story, Emilsen Rincón, Rafael Nieves y Romina Guarísma que se esmeran en construir, a través de la disciplina y el respeto por esta profesión y quienes la aman, un refugio para lo diverso. Estar en terrenos exigentemente amorosos del oficio de la escena, donde nos enseñaron que la vulnerabilidad es un tesoro sagrado que aprendemos a cuidar, y que la energía colectiva es más importante que la expresión individual, me invitaba por primera vez a equivocarme y ser genuinamente desnudada. Comprendí que no tenía que vencer el miedo, sino convertirlo en aliado.</p>
    <p>Reconocerme como ser cambiante, móvil, me hizo entender que ser juiciosa y seguir las reglas no era lo mismo que ser disciplinada, y que, además, no me funcionaría si quería ser artista. Con Sofía Monsalve aprendí que no puedes temerle al abismo indomable de la posibilidad; incomódate, sal de la zona de confort, juega con el vértigo del desequilibrio. Cuando había logrado desplazar mi relación con el miedo del centro de lo que hacía, noté que todos los principios (Danza, Somática, Actuación y Elementos de la Puesta en Escena) parecían conducir a un mismo espacio habitado por seres presentes en el aquí y ahora, que tienen la capacidad de</p>
    `
    },
    {
      content: `
      <p>descentrarse para dialogar consigo mismos, con el espacio y con las demás personas.</p>
      <h3>A través de la ventana:</h3>
      <p>La pandemia llegó a mitad de mi segundo semestre. La gran pausa de un mes, aún con el intento de recurrir a videos de entrenamiento y repasar una y otra vez los ejercicios previos al encierro, entorpeció varios de los procesos, y no hubo manera de retomar virtualmente muchos de ellos. El montaje de cierre de ciclo básico me dejó con un sin sabor. Si bien a través de la pantalla había otras posibilidades y otras maneras de acercarnos, y nos retó a ser creativos, sentía que algo siempre faltaba: la presencia. Allí se enraizó una de las certezas más importantes para mí en nuestro quehacer: las artes escénicas son una excusa para el encuentro. Para mirarnos a los ojos, sentirnos respirar, sudar, reconocernos humanos en las demás personas.</p>
      <p>Esta experiencia llevó a que sintiera que no estaba preparada para el ciclo profesional, y el  interés por fortalecer y prepararme correctamente abriría la puerta de una de las experiencias que más valoro: el camino pedagógico a través de las monitorias. A partir de tercer semestre fui monitora de todas las clases de ciclo básico, a excepción de principios de la danza, y en séptimo semestre comencé a acompañar clases de ciclo profesional. Este nuevo rol me permitió apropiar, afianzar y entender mucho mejor los principios pre expresivos, descubrir en la repetición la posibilidad de rutas y pautas diferentes, y a reflexionar en torno a lo que podía observar en las otras personas. La pedagogía con enfoque somático me invita a descubrir cómo acompañar procesos desde enfoques transversales.</p>
      `
    },
    {
      content: `
      <p>Mi tercer semestre, también en modalidad virtual, volcó mi mirada hacia mí misma y mi relación con el mundo, y eso hizo que profundizara en una de las preguntas plantadas en mi ser: ¿de dónde vengo? Muchas de mis reflexiones tanto en laboratorios, puestas en escena y ensamble tuvieron dos enfoques esenciales: La ciclicidad uterina y la relación con la naturaleza.</p>
      <p>En la clase de anatomía experiencial, Bobby Rosemberg me invitó a pasar de la comprensión anatómica teórica a explorar en primera persona mi feminidad. Para ello, conté con el aupador acompañamiento de Isabel Barrios, quien a través de la práctica somática con Rebozo, me ayudó a comprender que con amor no hay nada en mi que no pueda sanar. Esta experiencia fue la puerta para darle un espacio en mi práctica artística a la sanación, el diálogo ancestral, y el sagrado femenino.</p>
      <p>Tengo la fortuna de vivir en zona rural, provocada por el horizonte de montañas cuando levantaba la mirada, a buscar refugio e inspiración en los árboles y plantas, en el viento y el canto de los pájaros. Durante el ensamble con Juanita Delgado, quien nos invitaba a escuchar adentro y afuera, pude descubrirme “cuerpo (soma/ser) que se halla a sí misma cuando se pierde en la paleta interminable de verdes de una madre que no juzga”.</p>
      `
      }
  // Añade más bloques según necesites
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

      {showBook && textBlocks[currentPage] && (
        <div className="book-container">
          <div className="close-zone" onClick={handleCloseBook}>
            X
          </div>
          <div 
            className="book-text" 
            dangerouslySetInnerHTML={{ __html: textBlocks[currentPage].content }}
          ></div>
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