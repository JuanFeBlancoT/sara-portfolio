import React, { useState, useEffect } from 'react';
import "../styles/cuarto.css"; 
import bgcuarto from "../../images/Cuarto.jpg";
import brillo from "../../images/brillo.png";
import openBook from "../../images/libro_cuarto.png";
import BackButton from '../BackButton';

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
      <p> la javeriana… mi última esperanza. Mi mejor amiga me acompañó a ver a “Los perros de la Impro” en una carpa, y pasados unos cuantos minutos, la miré</p>
    `
  },
  {
    content: `
      <p> con lágrimas en los ojos y le dije “la encontré”, y ella también lo supo. “Te veo aquí”, dijo en un abrazo que todavía me cobija. Jamás voy a olvidar ese día.</p>
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
      <p><i>“Salivar acidulce<br></br>Cosquillas en manos<br></br>Pulso en garganta</p>
      `
      },
      {
        content: `
        <p><i>Piel en intemperie<br></br>Ojos perdidos<br></br>Escalo-frío<br></br>Pecho caliente<br></br>Despeluque<br></br>Pies que se hunden<br></br>Viento frío en nariz”<br></br>(Bitácora ensamble de Tecnologías y Mediaciones con Juanita Delgado, 2021) </p>
        <p>Me descubría ahora no sólo como ser móvil y cambiante, sino como multiplicidad. Rumi lo expresa mejor: “No soy una gota en el océano, sino todo el océano en una gota”. </p>
        <br></br>
        <h3>Mi corazón le pertenece a esta tierra:</h3>
        <p>Mi primer año de ciclo profesional prioricé las clases de sociología, poniendo mi mirada en la teoría colombiana y latinoamericana, lo que me llevó luego a la puesta en escena de Teatro Colombiano con Alejandra Marín y el ensamble de Danza Tradicional con René Arriaga. Me hallé ante una identidad herida por el conflicto armado, por dinámicas coloniales, extractivistas y capitalistas.</p>
        `
      },{
        content: `
        <p>Con una Colombia atravesada en sus entrañas por la violencia, y me pregunté ¿qué puedo hacer yo?</p>
        <p>Muchos dirían que la sociología me volvió pesimista… yo diría que me volvió más humilde. Nadie puede transformar la realidad social, de por sí es difícil cambiar una misma como persona. De alguna manera eso me liberó, y me mostró el poder que tiene esmerarse en transformarse a uno mismo, repercutiendo en refracciones simbióticas de cambio.</p>
        <p>La transformación del arte es silenciosa y lenta, como una piedra que cae en el agua y serena reverbera; insospechada.</p>
        <p>Tanto en la puesta en escena como en el ensamble con estos maestros, descubrí que podía ir más allá de la pregunta por la conciencia social y del arte como reparación o acto político. Creo que por eso ya no le apunto a un teatro con enfoque épico-crítico. Mi proyecto final para la clase de Teatro Colombiano en torno a la obra Kilele, me permitió descubrir un enfoque que resonó en las profundidades de mi alma: un teatro cuyo foco está en la existencia humana misma -Viviescas lo llamaría “ontológico”-, lo que implica una visión del teatro como parte transformativa del ser humano desde su ser, más que en eventos sociales particulares.</p>
        <br>
        <h3>Nace una Artesana:</h3>
        <p>Llevaba ya mucho tiempo fortaleciendo lo reflexivo y racional desde el escritorio de mi casa y discusiones</p>
        `
      },
      {
        content: `
        <p>por Zoom, y me vi en la necesidad de pasar del discurso a realmente verme, sentirme, oírme, y ser interpelada en mi cuerpo y corazón por la naturaleza, lo femenino y lo identitario. Esto no hubiera sido posible sin regresar al encuentro.</p>
        <p>En mi quinto semestre llegó la Técnica Básica de Acciones Físicas, el mayor hito en mi trayectoria como artista. Maria Adelaida Palacio repite constantemente que el crecimiento artístico está estrechamente ligado al crecimiento personal. Creo fielmente en eso, y creo que el trabajo con Fernando Montes me hizo consciente de que, si bien mi discurso giraba en torno a la integralidad, hasta ese momento, no me había permitido ser alterada en la entraña del ser. Inconscientemente Sara Lucía y el arte eran dos cosas distintas, y la relación que manteníamos se iba más por lo instrumental.</p>
        <p>Las acciones físicas, entendidas como “el puente que canaliza/moldea lo invisible desde medios poéticos (danzar, actuar, cantar, poetizar) que surge de las necesidades y deseos interiores y se materializa en la acción, es aquella que transforma e interpela los estados mentales, emocionales y corporales tanto de quien la realiza como de quien la presencia. El estado energético y el conjunto en su totalidad se ven tocados hacia lo sutil; hacia la vida”, (Definición colectiva creada en clase, 2022) es un camino donde el ser artista no está separado de ser persona.</p>
        <p>Hay muchas rutas para este mismo fin, y todas pueden ser llamadas prácticas somáticas, pero en mi caso particular hallé en las acciones físicas un modo de estar en el mundo, y no una mera experiencia que se desvanece al salir del espacio de trabajo. Es volver la experiencia sangre, pensamientos, manos y corazón. No está lejos de mí.</p>
        `
      },
      {
        content: `
        <p>Somos. Soy. Es ser una Sara Lu conectada consigo misma, con sus ancestras y con la naturaleza, una Sara Lu conectada con las personas que la rodean, es poder ver el brillo en los ojos de todos, abrazarse, decirse cosas bonitas, regalarse un lugar donde la dignidad existe. Es la utopía de la generosidad y la reciprocidad desmantelandose del nombre utopía. Es ver la capacidad y potencialidad humana de lo bello.</p>
        <p>A través de esta experiencia, que se fue profundizando en el ensamble Quién me Navega es el Mar y el Semillero Esculpir el Presente, he ido descubriendo mi propio camino en el arte, y para mí, como artista, como Sara Lucía, significan eso: un camino artístico, ético, espiritual, de comunidad, expresivo en el arte que no está separado de lo que soy, de la espiritualidad ni de la vida. Un camino en busca de acciones reales y concretas que nos afecten como personas, a nuestro entorno y a nuestra sociedad.</p>
        <p>Fuí cultivando mi deseo de ser artesana y puente sensible de los mensajes, imágenes e imaginaciones enviadas por el espíritu universal, más conocido como amor, y comencé a ver las técnicas y entrenamientos como herramientas que me preparan para crear; es decir, para ser puente, pues es a través de mi cuerpo, yo cuerpo, voz, forma, mirada, y movimiento que me pongo en disposición para esculpir el presente.</p>
        <br>
        <h3>Mujer Sol: En búsqueda de la creación.</h3>
        `
      },
      {
        content: `
        <p>Mis decisiones de ahí en adelante fueron guiadas por el interés en entrenamientos que me mantuvieran viva, y que me dieran herramientas para ofrecerle al arte, al espíritu universal y a la energía muchos canales a través de los cuales pudiese manifestarse.</p> 
        <p>Sexto y séptimo semestre fueron eso: exasperada investigación creativa a través de las acciones físicas, el teatro gestual, el entrenamiento de voz y Suzuki. Fui descubriendo en la voz, el cuerpo presente, los objetos, los textos y la imaginación, extensiones de mi ser que me integraron más como ser humana. Soy vehículo expresivo. Voz que carga una manada que resuena, retumba, abarca, dilata y vibra; trabajo con los objetos como narradores y posibilidad imaginativa; con los textos, míos y ajenos, en el intento de descifrar los adentros; y en colectividad porque es aquella que sostiene la vida.</p>
        <p>Diría que esa fue la época dorada de mi expresión creadora; tres ensambles, monitorias, al menos 5 proyectos por fuera de la universidad, entrenamientos en vacaciones y el trabajo con el semillero de investigación-creación Esculpir el Presente. Sin embargo, la pausa no tardó mucho en llamar. Todo ese deseo y entrenamiento desmedido llevó a que mi búsqueda perdiera sentido y horizonte. Estaba tan atosigada, cargada y agotada, que mi salud física y mental se vieron fuertemente afectadas.</p>
        <br>
        <h3>Mujer Luna: El llamado a la pausa.</h3>
        `
      },
      {
        content: `
        <p>Si bien sabía que necesitaba bajar el ritmo, había algo que me lo impedía: me aterraba la pausa.</p>
        <p><i>“Abriré aquí mi corazón.<br>Descansar además de ser una urgencia,<br>una necesidad,<br>una pregunta o investigación,<br>es uno de los mayores miedos que tengo.<br>Soy analfabeta en el arte del ocio.<br>Soy la contradicción del afanoso deseo de productividad<br>y el anhelo de tranquilidad.<br>Corre corre hasta agotar.<br>Hasta enfermar.</p>
        <p><i>Cuando me observo a mí misma, veo que he construido la idea de que quien soy y los lugares a los que he llegado han sido a causa de mi esfuerzo, disciplina, dedicación. Si no estoy en movimiento, siento que no valgo nada. Que el aquietamiento terminaría por llevarme a la mediocridad, incapacidad. No sé si eso sea cierto, pero la realidad es que me da mucho miedo comprobarlo. Llevo tanto tiempo volcada hacia el afuera, hacia lo que esperan de mí, hacia la imagen que yo desearía que tuvieran de mí, que ésta termina siendo la misma que yo quiero tener de mí misma.”<br>(Visión Somática, 2023)</p>
        <p>En octavo semestre recordé el llamado que me había hecho mi útero: el malestar físico y emocional son un reflejo de algo más profundo que pide atención. Debía permitir el vacío y la quietud para volver a escucharme. Por eso inscribí la clase de Visión Somática con Emilsen Rincón. La somática es mi eterno retorno. Como parte de mi investigación en la clase, participé de una experiencia de ejercicios espirituales donde permanecí durante ocho días en silencio, y pude revisar y reflexionar profundamente</p>
        `
      },
      {
        content: `
        <p>sobre los últimos tres años de mi vida. Fui consciente del miedo, las heridas y el caos, y de la profunda necesidad de aprender a vivir en equilibrio. Ni demasiado receptiva, ni demasiado creativa. Aún estoy aprendiendo a regular las dos.</p>
        <p>Noveno semestre fue extraño. Comencé a sentirme con un pie adentro y el otro afuera, como si todo me llamara a que ya era hora de ir cerrando mi camino universitario. Llegó la primavera, y me invitaba a cosechar y a poner todas mis herramientas y aprendizajes más allá del medio universitario.</p>
        <p>Tuve la oportunidad de viajar a Brasil y Sesquilé con La Reina, vivimos experiencias muy enriquecedoras con el Semillero Esculpir el Presente; fuí relatora durante la visita de Eugenio Barba y Julia Varley, y participé del encuentro con Iben Nagel Rassmusen. Me vinculé al Proyecto Javeriano de Paz y Reconciliación y pude asistir como relatora a la fase de consulta para el Modelo de Reconciliación y Convivencia Nacional a cargo de la Presidencia de Colombia. El trabajo comunitario volvió a mi vida, y andando descalza por Buenaventura, Vista Hermosa, Turmequé, Sesquilé, Altos de la Florida y Sao Paulo, ví un horizonte más allá de la ciudad en la que artes escénicas y sociología trabajan juntas. Mi tesis de sociología apunta a ese encuentro.</p>
        <p>Ahora, en último semestre, sabía que no podía graduarme sin inscribir una clase de danza, pues es otra puerta de movilización de la energía a la cuál no me había aproximado desde la rigurosidad de una técnica. Así, la Técnica Básica de Danza Tradicional con Nicolás Silva y Karina García me ha permitido reflexionar en movimiento en lo que implica ser una</p>
        `
      },
      {
        content: `
          <p>tejedora que se funde en la espiral eterna del sentipensar la vida.</p>
          <br>
          <h3>Soy todas estas:</h3>
          <p>Hace unos días sucedió algo hermoso. Estábamos en una actividad con personas de muchas carreras. Nos pidieron escribir. Yo hice un poema y me pidieron leerlo. Lo hice, con la voz temblorosa. Aplaudieron. Al final de la jornada, se me acercó Miguel. Me dió un abrazo profundo y me dió las gracias por lo que había escrito. Dijo que sintió y vió cómo el grupo se estremeció mientras leía. Que algo bien adentro se había movido.</p>
          <p>Pensé: escribí algo muy tonto. Si lo hubiera leído en escénicas, probablemente las personas no hubieran reaccionado igual. Nos acostumbramos un poco a la belleza. Y caí en cuenta de que esa es nuestra profesión. Para esto nos formamos. En nuestra búsqueda por esculpir los adentros a un público, nos volvemos hábiles en el lenguaje sensible del alma humana. Con facilidad traspasamos la barrera que conecta con el corazón y la entraña. Esa es nuestra hermosa maestría y artesanía.</p>
          <p>Descalzarse los pies se convirtió en descalzarme el corazón, los pensamientos, la voz, el movimiento, el ser completo. La ternura que era máscara es ahora ternura genuina. Aprendí a confiar en mi intuición y en las demás personas. A valorar mi autenticidad, y me enamoré de lo pequeño. De la trascendencia presente, cotidiana. Ya no quiero ser actriz. Ni escoger un énfasis. Ni transitar por un solo camino.</p>
        `
      },
      {
        content: `
        <p>Deseo encaminarme cada vez más a la integración: soy todos estos hilos, nudos, extensiones y desenlaces. Soy el miedo y la valentía, el teatro, la voz y el gesto. Soy palabra y melodía. El golpe en la tierra y la hoja que vuela. Femenina y masculina, luna y sol. Soy terremoto y quietud. Juiciosa rebeldía. Vacío y big bang.</p>
        <p>Comprometiendo mi vida y mi corazón al servicio del amor, me siento como la hoja que se desprendió y que, aunque añora el abrazo del árbol, vuela plena hacia el amanecer.</p>
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
      <BackButton />
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