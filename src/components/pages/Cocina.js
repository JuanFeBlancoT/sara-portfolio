import React, { useState, useEffect } from 'react';
import '../styles/cocina.css';
import cocinabg from '../../images/Cocina.jpg'
import BackButton from '../BackButton';

const Cocina = () => {
  // Definición de `textBlock` para cada zona
  const textBlockZona1 = [
    { title: "", content: "<br></br>Recuerdo una vez que mi mamá me explicaba el por qué el mesón está alrededor del horno, y es porque el hogar se hace alrededor del fuego. Es algo que nunca se me va a olvidar.<br/><br/><br/><br/>A la mesa se encuentran<br/><br/><b>Profesores:</b><br></br>Fernando Montes Joya, María Adelaida Palacio y Sofía Monsalve Fiori<br><br/><b>Compañeros:</b><br><br/>Nicolás Gómez Torres y Angie Valentina Núñez Parada<br><br/>" }
  ];
  
  const textBlockZona2 = [
    { title: "Autor: Fernando Montes", content: "Conocí a Sara Lucía en la técnica de acciones físicas el 2021-1, cuando recién comenzaba la presencialidad parcial. Nos veíamos dos o tres veces por semana, y adicionalmente se realizaba trabajo remoto. Luego SaraLu estuvo en el ensamble Quien me Navega es el Mar que conduje, donde ella fue una de las creadoras del sueño de la Nostalgia. Y finalmente, fue una de las fundadoras del Semillero de Investigación Esculpir el Presente, que busca profundizar en el trabajo sobre las acciones y que ya lleva dos años funcionando.<br></br>La primera impresión que tengo de SaraLu en el espacio de trabajo, es de un cuerpo un poco desordenado y con poco tonus. Veníamos de un año de pandemia y seguramente de poco movimiento y eso se sentía en la calidad de su energía. También supongo que tenía poca experiencia para ese entonces en la carrera. Pero al mismo tiempo, recuerdo un brillo, una brillantez de inocencia y de fascinación por el trabajo. Otro elemento importante de esas primeras" },
    { title: "", content: " impresiones, es su juicio. Es una persona muy correcta, por un lado muy dedicada y seria, y como pude ver después rigurosa en su trabajo. El rigor ayuda, pero ser correcto no ayuda al arte, porque el arte requiere romper moldes, esquemas, y pensamientos para crear.<br></br>Sin embargo, después de estos espacios trabajados juntos puedo decir que SaraLu tiene esa fuerza increíble de ser disciplinada y rigurosa en el trabajo para romper y crear los esquemas existentes. Se volvió correcta para lo incorruptible, porque sin ese rigor no iría hacia lo profundo.<br></br>SaraLu tiene la fortuna de portar la llama de la fascinación en su corazón, y de ser rigurosa y disciplinada en su trabajo. Esta combinación, porta irremediablemente una transformación como artista y como ser. Esa continuidad en el proceso y en la relación de los ejercicios propuestos en el espacio de acciones físicas, le permitieron ir descubriendo que la potencia y posibilidad creativa se encontraban en ella, no como algo egóico, sino en conexión con la naturaleza creativa en sí misma." },
    { title: "", content: "En este espacio la acción es como una materia primigenia a través de la cuál puedo formarme como artista y como persona, es un lugar donde el trabajo sobre el arte puede ser un trabajo sobre sí mismo, y claramente SaraLu percibió o intuyó que en las acciones físicas podía encontrar no solo un elemento del trabajo del actor, sino un elemento de transformación de su ser y de expansión de la conciencia. Un espacio de conocimiento. No sabría precisar en qué momento exacto SaraLu hizo esa conexión, aunque quizá fue un proceso que gota a gota, algo en su capacidad de maravillamiento fue haciendo germinar su singularidad creativa y haciéndola consciente de ella.<br></br>Lo que sí puedo decir es que fue muy bello ver ese proceso de iluminación del ser, y de surgimiento de la dimensión creativa del inconsciente en su trabajo. En ese momento sus materiales y ella misma empezaron a irradiar esa fascinación y una especie de luz amorosa. (Odio decirlo pero con ella es inevitable no usar esa palabra de amor). Esa dimensión “amorosa” del trabajo creativo cuando se manifiesta, irradia la belleza y la dignidad de lo humano"},
    { title: "", content: "porque es una belleza o una divinidad que carga el sello de la naturaleza, que no nos pertenece, pero que somos parte de ella, y que requiere un trabajo de ceder la voluntad y de ponerse al servicio de la naturaleza creativa en uno mismo.<br></br>Un elemento fundamental para acceder a esta dimensión del arte, creo yo, es la capacidad de servir. Una capacidad que puede tener un artista de servir al alma humana, una capacidad ecológica de servir sin razón, sin porqué, pues la razón y el por qué son los reinos del ego, mientras que la sinrazón y el desinterés son los reinos de la creación. Fue muy bello ver cómo la dimensión poética y el trabajo sobre la poesía abrieron un portal de comprensión y de visión del mundo del arte para SaraLu. Fue como si piuuuf, en un segundo el universo del arte le permitiera “ver el jardín desde la ventana”. Quizá SaraLu tiene esa capacidad de abrir una puerta en la que veo la obra de la belleza operando en nuestra realidad ordinaria y burda.<br></br>Severa responsabilidad que tiene usted con el mundo."},
    { title: "", content: "Pude ver, asistir, y participar en cómo los materiales, los escritos y acciones de SaraLu se poblaron con sus memorias. Primero, con sus familiares cercanos, pero luego también con su linaje creativo que trasciende el tiempo. Como si ella pudiera escuchar sus voces muy lejanas. De lo originario que no tiene tiempo, siendo al mismo tiempo personas. Tolstoi dijo, descubre tu aldea y serás universal, sólo que cuando saralu describe su aldea está poblada de sabedoras, curanderas, sacerdotisas, sapos, ríos, animales fantásticos, ballenas que vuelan, y que de alguna extraña manera logra traer a este mundo, darles vida y una forma en sus materiales creativos.<br></br>En el espacio del ensamble 'Quien me Navega es el Mar', los estudiantes debían preparar individualmente, y luego en grupos, acciones y materiales de actuación. En las propuestas que SaraLu realizó pude ver que había desarrollado un pensamiento crítico con respecto a las Acciones Físicas, es decir que entendió, asimiló y pudo formularlo en acción, no teóricamente sino en la realización de sus materiales, y eso no se logra si corazón, pensamiento"},
    { title: "", content: " y cuerpo no están entretejidos.<br></br>Pude percibir allí que SaraLu captó algo que para mí es fundamental, y es la dimensión del actor-artista, es decir un actor que puede proponer un material que ya de por sí es una obra de arte porque contiene una imagen, un vestuario, una propuesta conceptual, estética, un texto, una energía escénica, etc. SaraLu entendió que el ejercicio del actor puede ser un ejercicio creativo en toda su dimensión, y no sólo interpretativo o de representación, o de ejecución de un rol. Y creo que en nuestro contexto es muy importante tener esa autonomía, que no dependa de un profesor o un director, o alguien que conduzca el trabajo, sino que el actor pueda asumirse como un artista, y serlo. Esto es una conjunción de disciplina, observación, sensibilidad, intuición, y escucha, no egoica sino ecológica.<br></br>En todos los espacios que he podido compartir con SaraLu, fue, ha sido y es un placer trabajar con ella, por la alegría y el amor que porta en el trabajo, con gran rigurosidad. Tiene esa capacidad increíble de portar luz a lo que uno está"},
    { title: "", content: " haciendo, y eso sin caer en un falso bienestar o fachada:<br></br>“Nunca perseguí la gloria<br>ni dejar en la memoria<br>de los hombres mi canción;<br>yo amo los mundos sutiles,<br>ingrávidos y gentiles<br>como pompas de jabón.<br>Me gusta verlos pintarse<br>de sol y grana, volar<br>bajo el cielo azul, temblar<br>súbitamente y quebrarse”."}
  ];
  
  const textBlockZona3 = [
    { title: "Autora: María Adelaida Palacio", content: "<b>Caminar la Creación</b><br/><br/>Hace varios años conocí a Sara Lucía y durante su carrera he tenido la inmensa alegría de contar con ella en varios de mis cursos.  En ciclo básico en Elementos de la puesta en escena II y luego en el ciclo profesional tomó la Puesta en escena de dramaturgias, fue monitora varias veces de mis cursos, participó en el ensamble interdisciplinar “Un hombre lleno de agua por dentro”, estuvo en el Laboratorio de composición a partir del texto dramático “Incendies” y además participó en el único ensamble de escrituras que acompañé.<br/><br/>A Sara he tenido la fortuna de conocerla, de acompañarla y caminar cerca de ella.<br/><br/><i>Sara camina largos trechos.</i><br/><br/><i>Con calma y gozo.</i>" },
    { title: "", content: "En cada encuentro, ella ha sido raíz, puente, conversación. Ella desde su manera de habitar el mundo, habilita la creación para todas quienes hemos tenido la posibilidad de imaginar a su lado universos poéticos.<br/><br/><i>Sara es lugar de encuentro</i>.<br><br/>No se puede hablar de su trabajo, el cual es maravilloso, técnico, consciente, propositivo, sin acercarse a su universo interior. Universo poético y feroz. En donde la belleza y lo político en cada accionar dan cuenta de su mirada aguda sobre lo femenino, la ciudad, la familia y la tierra.  Creería que sobre todo la idea de la mujer y el territorio ancestral es una idea que la atraviesa de manera profunda.<br><br/>Hago un paréntesis: durante los últimos años en mis espacios de docencia intento crear un espacio en donde los mundos interiores de cada una de las estudiantes encuentren un lugar, un espacio, un cauce y se desborden de alguna manera.  Es un proceso que requiere tiempo y" },
    { title: "", content: "espacio, requiere calma y además un sostenimiento particular. Sin duda compartir con Sara está práctica la atesoro porque con ella he podido caminar infinidad de preguntas y de estrategias alrededor esa investigación que nos lleva tan adentro de nosotras.<br><br/><i>(En este escrito hablaré de nosotras, de Sara, de mí y de tantas otras)</i><br><br/>Ahora regresemos al paisaje interior de Sara, un lugar habitable para todas nosotras, lleno de amor, de diálogo, de conversación, de sostenimiento y de un profundo respeto por imaginar la creación como un lugar amoroso, respetuoso y común. Sobre esto quiero ampliarme, raras veces una artista joven comprende en el hacer diario la idea de lo común, no como un discurso, sino como un accionar de todos los días, como un acto político. Desde esa belleza y calma, desde esa profundidad y liviandad Sara se construye en cada accionar cotidiano como una mujer política dispuesta a alzar su voz y construir espacios para todas" },
    { title: "", content: "nosotras.<br><br/>En cada manera de acercarse a la creación tiene la valentía de contener su universo y no teme a prestarlo, a dejarse ir o mostrarse en ese rio desbordado, en esa casa de la infancia, en esa línea ancestral de mujeres que la acompañan, en sus preguntas sobre el cuerpo, la voz, la palabra poética y la política.<br><br/>Acá un poquito de lo que imaginó (y nos contó) sobre su casa de la infancia:<br><br/><i>El porvenir.<br><br/>Mi casa, así se llama.<br><br/>Y este libro lo hicieron porque muchas personas les aconsejaron que deberían contar la historia del Porvenir.<br><br/>Entonces mi mamá empezó a escribir cómo llegaron al" },
    { title: "", content: "<i>porvenir, cómo descubrieron la casa, no sé qué, y pues está como todo. Entonces, esta solía ser la casa antes, como cuando la encontraron por primera vez. Así era la casa antes. Bueno, tienen fotos de todo.</i><br><br/>Caminar la palabra es una consigna con la que los indígenas del país nos invitan a unir el pensamiento y la vida.  Caminar la palabra como una propuesta a ser coherentes, a ser conscientes, a asumir nuestra palabra, a dar cauce a nuestra voz. Se me ocurre pensar entonces que Sara durante estos años ha caminado mucho, y lo ha hecho con coherencia, con conciencia, con determinación y que en ese caminar nos ha invitado a muchas a conocerla, a escucharla, a abrazarla, a crear junto a ella. Sara camina con un grupo enorme de creadoras y nos lleva a lugares potentes de la creación.  Sin duda su paso por la carrera de Artes escénicas es un regalo para todas quienes tuvimos el placer de crear a su lado.<br><br/>" },
  ];

  const textBlockZona4 = [
    { title: "Autor: Nicolás Gómez", content: "<b>Sobre Sara Lucía<br>o cómo describir un fenómeno de la naturaleza.<br></br>Evaluación de pares</b><br></br>Puede que el título parezca una exageración poética, pero considero es la forma más clara de expresar cómo es la experiencia de trabajar con Sara Lucía en el escenario. Con ella compartí en escena más veces de las que puedo pensar. Más que con otras personas en la carrera de artes escénicas.  Digo como su amigo y su colega, que los descubrimientos de “sara lu” sobre la escena muestran la calidad de una gran artista e investigadora, que en ella parece mezclarse como sinónimos. Su acción en escena mezcla una aprehensión técnica y una conciencia antropológica de lo que se hace. Ejemplificando los dos caminos de formación que ella ha tomado durante su paso por la universidad javeriana.  Su presencia, su receptividad en la composición, su sensibilidad y su conciencia de la" },
    { title: "", content: " acción escénica como vehículo para la transformación de imaginarios y contextos la hace una de las artistas más íntegras y completas que he conocido.<br></br>Mi primera interacción con ella en clase fue durante la clase de Fernando Montes de acciones físicas. Durante la clase conocí a una mujer liviana como el viento, que encarnaba su dulzura y la energía de una niña sin esfuerzo alguno. En ella el juego y la disposición a ser atravesada por la poesía parecían un verdadero juego de niños. Aunque para ella no parecía serlo. El juego se volvió una excusa para pensar sobre el origen, sobre su feminidad. Haciendo de su acción en escena, una muestra de su trabajo reflexivo frente a ella misma, frente al otro, frente al espacio y frente a las implicaciones de ser mujer.<br></br>Luego durante la clase de teatro gestual y el ensamble de acciones físicas (que ella fue uno de los más importantes promotores de) pude trabajar con ella de cerca en la composición y la creación desde la técnica. Ella siempre receptiva, hacia que las ideas estallaran cuando uno se las" },
    { title: "", content: " proponía, y nunca dejaba atrás sus intereses creativos de lado, solo encontraba una forma de hilarlos, como una tejedora de las propuestas escénicas. Crear con ella era un constante laboratorio. No había idea mala para ella, todo era posible, y todo podía ser probado.<br></br>Técnicamente Sara Lucía es la muestra de que el trabajo del artista escénico es un trabajo de manualidad plástica. Su energía que naturalmente era ligera y suave, y durante los 4 años que la pude ver como con su que con el trabajo constante y la disciplina con la que ella lo afrontaba, la energía en todos sus estados se volvió su forma natural. fue moldeándose en un material capaz de volverse rígido como la piedra, o denso como el barro. Fue enseñándome como se ve una presencia escénica que puede arrasar con el mundo. Pero desde la bondad como puede ser puesto al servicio de la colectividad.<br></br>Su investigación en el Suzuki, la danza tradicional y la técnica del teatro gestual, le dieron la capacidad de transformar su cuerpo en el de la niña, en el de la madre, en"},
    { title: "", content: " el de la guerrera. Y su voz… la escuche transformarse en el pájaro que carga la nostalgia, en el agua que canta mientras pasa por el río.  En la oscuridad misma, que sale del vacío. Y aunque suena que ella podía con todo, que su flexibilidad la permitía adaptarse con facilidad a todo… ella siempre parecía como aquel que ama por primera vez. Con ese asombro del que descubre todo por primera vez. Sin embargo, no vayan a pensar que esto hacía que sus propuestas fueran infantiles o carentes de una importancia social, por el contrario, toda la técnica es el vehículo que sara lucia utiliza para poner su arte al servicio de lo colectivo, de las mujeres que la han precedido, de la genealogía de su propio espíritu creativo. Sus bases técnicas, la volvían el conducto por el cual la tierra puede bailar y el viento puede decir unas cuantas verdades.<br></br>¿Necesitan que diga mas? ¿O ya me creen que es un vehículo de la naturaleza?"}
  ];

  const textBlockZona5 = [
    { title: "Autora: Sofía Monsalve", content: "Sara Lu es un ser que tiene la capacidad de hacerle a uno volver el optimismo a la vida. Su rostro iluminado siempre tiene la capacidad de transformar la desesperanza en posibilidad y juego.<br></br>Desde la primera clase de Principios de Actuación, Sara Lu (como la llamaremos todos) se muestra como un sol radiante. Ingenuo sí, pero también expansivo y luminoso. Llega a la carrera con alguna preparación previa, un poco de timidez, algo de miedo y suficiente fragilidad. Pienso que es “muy niña” y pareciera que se romperá en pedacitos apenas le caiga el primer “bastonazo” (literalmente, porque en esa época empezamos a trabajar con bastones). Pero Sara Lu pronto demuestra que, más allá de la ternura, el optimismo y esa máscara de niña, por dentro le ruge un animal extraño y potente. Sara Lu es incansable, trabaja como ningún otro compañero, llega puntual, entrega trabajos con esmero y dedicación y siempre tiene sed de más." },
    { title: "", content: "No demuestra dificultades para entender los aspectos técnicos de la clase, pero siempre quiere ir un poquito más allá de su propio límite y no tiene ningún problema en luchar por ello. Pero quizás su rasgo más especial es que toda esta lucha es vivida sin conflicto: pelea con dulzura, pregunta con delicadeza, insiste con tacto, presiona con gentileza. Y no se deja opacar por las dudas o dificultades.<br></br>He podido notar, que en el proceso del estudiante, cuando llega el momento en que se rompe su caparazón suele ser un periodo turbio y oscuro. Yo misma recuerdo tener momentos de mi formación en donde todo era negro, inútil y me sentía como un gusano desnudo y feo, peleaba con mis maestros y despreciaba mi oficio y mi capacidad de estar en él. Ese momento-gusano suele pasar con el tiempo y sin duda es fundamental en la formación del carácter de un artista.<br></br>Pero de tanto en tanto te encuentras estudiantes que ya son mariposas y que están en su tránsito a volverse hadas del bosque. Sara Lu es una de ellas. Sus procesos se" },
    { title: "", content: "desarrollarán incansablemente y las eventuales oscuridades que aparecerán no conseguirán opacar ese tremendo e incansable optimismo que la caracteriza.<br></br>Durante los primeros semestres, Sara Lu no parece tener urgencias expresivas o creativas. Hace todo muy bien, juega, se involucra, desarrolla sus potencialidades pre-expresivas, pero no parece estar desarrollando un lenguaje propio. En cuanto retornaremos de la pandemia, Sara Lu entrará de cabeza en los espacios extra-curriculares del Teatro de la Memoria que dirijo y es ahí donde empiezo a ver la tímida aparición de la urgencia. Sara Lu cree profundamente en el encuentro y se dedica devotamente a crear un espacio seguro y amoroso donde pueda surgir. En nuestros laboratorios ella explora todas las posibilidades del juego y se entrega al otro. Está ahí para su compañero, para dar aquello que el otro necesita y para regocijarse con lo que recibe en cambio. Es así como la invito a participar en un proceso creativo. Sara Lu se convierte en una de las artistas escénicas de la producción de teatro callejero Espectros, una cartografía de la peste. Su compromiso es pleno y"},
    { title: "", content: "descubro que puedo y podré confiar en ella como colega. No sólo es positiva sino que es sólida (artísticamente y laboralmente).<br></br>Unos años después, cuando la encuentro en Cuerpo es voz, es que observo que está empezando a romperse. Pero de entre las grietas sigue saliendo Luz y el nuevo pensamiento crítico que ha adquirido en los años, junto con esa comprensión compleja de las realidades sociales que le ha dado su otra carrera, si bien ahora es más asentado, no por ello es menos optimista.<br></br>En su proceso actoral la acompaño a enfrentarse a su voz y a las máscaras que inevitablemente asume y que ahora es consciente debe romper: su voz de niña buena, de niña tierna, de niña de mamá. Su voz de mujer indefensa, su voz medida y correcta. Con la dedicación de un escultor empieza a martillar la piedra y al romperse la revelación es sorprendente, tanto para ella como para mi. Aparece ese animal extraño y potente, esa voz grave y consistente, ese rugido oscuro y esa gravedad violenta. Sus partituras"},
    { title: "", content: " adquieren mayor complejidad interpretativa y pareciera que Sara Lu está lista para las oscuridades de la interpretación.<br></br>Pero en el fondo, yo agradezco que su luz no merme, ni que su ingenuidad se rompa. El mundo necesita personas como Sara Lu que puedan hacernos volver al cuerpo el optimismo.<br></br>No me quedan dudas de que seguirá encontrando caminos donde afirmar su ternura radical, su contundente fragilidad y sus mundos fantásticos llenos de hadas y mariposas.<br></br>Buen camino."}
  ];

  const textBlockZona6 = [
    { title: "Autora: Angie Núñez", content: "<b>Pajarita Colorida</b><br></br>Me siento frente al computador a escribir esta evaluación cual pianista que se sienta a tocar su más temida melodía. No sé cómo empezar y eso me aterra un poco, Sara Lu confió en mí para que hiciera una lectura de su tránsito por la carrera de artes escénicas. Algo que suena muy formal y académico, y a eso último es a lo que le temo; no sé si cumpla las expectativas de la academia, pero espero cumplir las de mi amiga. Si, esto estará lleno de subjetividad, lo siento.<br></br>mpezaré diciendo que hace unos años conocí una pájara, en su momento no sabía que lo era, se veía como una persona común y corriente, tal vez se vislumbraba un poco de locura, pero nada extraño siendo alguien que decidió estudiar artes, y un brillo especial en su mirada, como de alguien que es capaz de ver la belleza y las sutilezas de la vida. Con el tiempo me di cuenta de que era un colibrí, lo supe porque conforme" },
    { title: "", content: " compartía con ella podía observar su vuelo, y sus alas coloridas, fuertes y ágiles. Ella dice que es una joven a la que confunden con niña y a la que llaman alma vieja quienes la conocen, y está en lo cierto. Dice también que lleva en sí a su madre, su abuela, su bisabuela, su tatarabuela, y a todas las Sara Lucías que le anteceden, sí, la pájara tiene nombre: Sara Lucía, pero le decimos Sara Lu.<br></br>Dicen que no hay que poner a nadie en un pedestal porque se puede caer, y entre más arriba se le tenga, más dolorosa será la caída, pero yo no temo en afirmar que puedo poner a Sara Lu en un pedestal, porque confío en ella, confío en el ser humano que es y en la artista y tejedora escénica que eligió ser.<br></br>Hoy, por alguna extraña razón, tengo la valentía de hacer afirmaciones y haré una más, y es que considero que hay dos cosas imprescindibles para ser un artista en cuerpo y alma: una es la disciplina y la otra, el alma precisamente. Se necesita alma y disciplina para ser un artista cuyo arte esté vivo. Y por eso confío en Sara Lu sin temor de ponerla en el" },
    { title: "", content: " pedestal de los artistas cuyo arte está vivo, porque ella tiene esas dos cosas que considero imprescindibles: alma y disciplina. Claro, usted pensará “todos tenemos alma”, pero lo cierto es que no todos tenemos un alma dispuesta a amar y crear, otra cosa importante para un artista que quiera que su arte esté vivo: el amor. No se puede desligar el amor de la creación, diría que toda creación es un pedacito de amor materializado. Cuando veo a Sara Lu, veo en su mirada y en su ser entero eso: amor, y un alma abierta, sensible, con la receptividad de la luna y la vigorosidad del sol.<br></br>Su disciplina la conocí trabajando con ella, y aunque sea una Libra y anote todo en su agenda para no olvidar las cosas, tenga la certeza de que ella no lo/la defraudará, porque si asume un compromiso lo cumple a cabalidad, con excelencia y entrega.<br></br>Si en la cotidianidad se puede ver en ella el amor, y algo de su alma, en escena es algo mucho más poderoso; pues es generosa con su trabajo y con quienes vienen al encuentro, dando de sí una energía de calidad y una presencia escénica"},
    { title: "", content: " luminosa, un cuerpo fuerte y flexible, que es puente entre lo sutil y lo material. Nos comparte cómo suena su alma a través del canto y la palabra. Pone en cada acción, su cuerpo, su pensamiento y su corazón.<br></br>Si me preguntan qué pienso de ella y su tránsito por la carrera, diría que basta con mirarla para concluir que es una persona/pájara que supo sacarle mucho provecho a la carrera, alguien que se dio cuenta de cosas importantes respecto al arte, respecto a su arte (pero no se pueden decir, por eso es el arte secreto del actor), alguien que dejó que su ser se involucrara plenamente con la creación, que se dejó permear por los otros seres que encontró en el camino, y que supo descubrir cómo hacer del choque y de la coincidencia, una excusa para la creación. Y ahora, que termina esta etapa, sé que continuará su vuelo como solo ella lo sabe hacer, y que se tenga Bogotá y el mundo, porque el colibrí viene y su vuelo revoloteará en cada rincón, pues a ella le queda más vuelo que a la nave de la Nasa."}
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
      <BackButton />
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
