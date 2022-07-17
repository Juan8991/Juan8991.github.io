
import {Pregunta} from "../models/Pregunta.js"
/**
 * Esta función guarda las preguntas en objetos de Tipo Pregunta, que a su vez se guardan 
 * en un Array dependiendo su dificiltad. Entonces se guardan 12 objetos de tipo pregunta
 * por cada Array (3 objetos de tipo Pregunta por cada Categoria). Luego estos 5 Arrays se
 * guardan en un solo Array llamado "colecionDeTodasLasPreguntas".
 * @returns La coleccion de todas las preguntas
 */
export function agregarTodasLasPreguntas(){

    let colecciondePreguntasDificultad1=[];
    let colecciondePreguntasDificultad2=[];
    let colecciondePreguntasDificultad3=[];
    let colecciondePreguntasDificultad4=[];
    let colecciondePreguntasDificultad5=[];
    let colecionDeTodasLasPreguntas=[];
    //Dificultad 1--------------------------
    colecciondePreguntasDificultad1.push(new Pregunta("Arte y literatura","¿Cuáles son las flores más famosas pintadas por Van Gogh?","Girasoles","Flor de loto","Margaritas","Rosas"),new Pregunta("Arte y literatura","¿Qué se conoce como el séptimo arte?","Cine","Danza","Arquitectura","Deporte"),new Pregunta("Arte y literatura","¿Quien pintó la Mona Lisa?","Leonardo da Vinci","Pablo Picasso","Claude Monet","Salvador Dalí"));
    colecciondePreguntasDificultad1.push(new Pregunta("Historia","¿Quién fue el primer Presidente de Estados Unidos?","George Washington","Abraham Lincoln","Thomas Jefferson","Andrew Jackson"),new Pregunta("Historia","¿De qué nacionalidad era Juana de Arco?","Francesa","Italiana","Inglesa","Alemana"),new Pregunta("Historia","¿En qué año descubrió Cristóbal Colón, América?","En 1492","En 1592","En 1502","En 1482"));
    colecciondePreguntasDificultad1.push(new Pregunta("Ciencia","¿Cómo se llama el proceso por el cual las plantas elaboran su alimento?","Fotosíntesis","Relación","Nutrición","Absorción"),new Pregunta("Ciencia","¿Qué es la materia?","Aquello de que están hechas las cosas y los seres vivos","La cantidad de espacio que ocupa un objeto","La energía que captamos del sol","La energía que captamos del universo"),new Pregunta("Ciencia","¿Cuál es el planeta más pequeño de nuestro sistema solar?","Mercurio","Venus","Marte","Jupiter"));
    colecciondePreguntasDificultad1.push(new Pregunta("Deporte","¿Cuánto dura un partido de fútbol?","90 minutos","120 minutos","45 minutos","110 minutos"),new Pregunta("Deporte","¿Qué selección de fútbol ha ganado más Mundiales?","Brasil","España","Alemania","Argentina"),new Pregunta("Deporte","¿Cuánto dura la prórroga en un partido de fútbol?","30 minutos","90 minutos","45 minutos","15 minutos"));
    //Dificultad 2------------------------------------
    colecciondePreguntasDificultad2.push(new Pregunta("Arte y literatura","¿Quién escribió 'La Ilíada'?","Homero","Herótodo","Séneca","Marco Tulio Cicerón"),new Pregunta("Arte y literatura","¿Autor de 'El arte de la guerra'?","Sun Tzu","Shi Jing","Confusio","Dáo Dé Jing"),new Pregunta("Arte y literatura","¿Quién es el autor de la 'Divina comedia'?","Dante Aigheri","Petrarca","Maquiavelo","Giovanni Bocaccio"));
    colecciondePreguntasDificultad2.push(new Pregunta("Historia","¿Cuál fue el primer metal que el hombre empleó?","Cobre","Oro","Plata","Bronce"),new Pregunta("Historia","¿En qué lugar den mundo se dio el origen de la humanidad?","África","Asia","Europa","Alemania"),new Pregunta("Historia","¿Cómo se les llama a los juegos celebrados en honor a los dioses del Olimpo?","Olimpiadas","Los juegos del hambre","Los juegos de atenas","Juegos Olimpo"));
    colecciondePreguntasDificultad2.push(new Pregunta("Ciencia","¿Cuál es la ciencia que estudia las estrellas?","Astrología","Fisica","Estrellato","Astronomia"),new Pregunta("Ciencia","¿Qué receptores tenemos en la lengua que nos permiten saborear los alimentos?","Las papilas gustativas","Las glándulas de Montgomery","La pituitaria","Las gonadas"),new Pregunta("Ciencia","¿Cuál de las siguientes es una fuente de energia no renovable?","Todas las mencionadas","El carbón","El gas natural","Petroleo"));
    colecciondePreguntasDificultad2.push(new Pregunta("Deporte","¿Quién ganó el mundial de fútbol de 2010?","España","Brasil","Estados Unidos","Argentina"),new Pregunta("Deporte","¿Quién es el máximo goleador del FC Barcelona?","Leonel Messi","Andres Iniesta","Ronaldinho","Xavi Hernández"),new Pregunta("Deporte","¿En qué club italiano jugó Diego Maradona?","En el Nápoli","En la Juventus","En el Milan","En Roma"));
    //Dificultad 3----------------------------------
    colecciondePreguntasDificultad3.push(new Pregunta("Arte y literatura","¿Filosofo griego, autor de 'La República'?","Platón","Aristóteles","Democrates","Sócrates",3),new Pregunta("Arte y literatura","¿Quién escribió 'Utopía'?","Tomás Moro","John Locke","Tomas Hobbes","Thomas Fale"),new Pregunta("Arte y literatura","¿Quién escribió 'Frankenstein'?","Mary Shelley","Adele Gerhard","Jane Austin","Rosalie Loveling"));
    colecciondePreguntasDificultad3.push(new Pregunta("Historia","¿Cuál fue el primer metal que el hombre empleó?","Cobre","Oro","Plata","Bronce",2),new Pregunta("Historia","¿En qué lugar den mundo se dio el origen de la humanidad?","África","Asia","Europa","Alemania"),new Pregunta("Historia","¿Cómo se les llama a los juegos celebrados en honor a los dioses del Olimpo?","Olimpiadas","Los juegos del hambre","Los juegos de atenas","Juegos Olimpo"));
    colecciondePreguntasDificultad3.push(new Pregunta("Ciencia","¿Cuál es el animal más grande que habita la Tierra?","La ballena azul","Las orcas","La girafa","El elefante"),new Pregunta("Ciencia","¿Qué órgano del cuerpo humano consume más energía?","El cerebro","Los riñones","El pancreas","Los pulmones"),new Pregunta("Ciencia","¿Cuál fue el dinosario más grande que existio?","Argentinosaurus huinculensis","El Tyrannosaurus rex","El Braquiosaurio","El Espinosaurio"));
    colecciondePreguntasDificultad3.push(new Pregunta("Deporte","¿Qué revista concede el Balón de Oro?","France Football","Brasil Football","Europa sports","Argentina sports"),new Pregunta("Deporte","¿Quién se considera el mejor jugador de baloncesto de todos los tiempos?","Micheal Jordan","LeBron James","Stephen Curry","Kevin Durant"),new Pregunta("Deporte","¿Cuánto dura un partido de balonmano?","60 minutos","90 minutos","45 minutos","30 minutos"));
    //Dificultad 4--------------------------
    colecciondePreguntasDificultad4.push(new Pregunta("Arte y literatura","¿¿Cuál de estas obras no es de William Shakespeare?","Alejandro Magno","Julio Cesar","El sueño de una noche de verano","Hamlet"),new Pregunta("Arte y literatura","¿Qué filosofo es el autor de 'Aforismos sobre el arte de vivir'?","Arthur Schopenhauer","René Descartes","Immanuel Kant","Friedrich",4),new Pregunta("Arte y literatura","¿Sabes quién fue el autor de 'Moby Dick'?","Herman Melville","Walt Whitman","Charles Dickens","Henry David Thoreau"));
    colecciondePreguntasDificultad4.push(new Pregunta("Historia","¿Que arte nació en la ciudad griega de Atenas en el año de 536 a.C?","El teatro","La comedia","La poesia","Todas las mencionadas"),new Pregunta("Historia","¿En que guerra participó Juana de Arco?","La guerra de los 100 años","Primera cruzada","Guerra napoleónicas","La guerra de los 30 años"),new Pregunta("Historia","¿Cuál era la capital del Imperio Inca?","Cuzco","Quito","Machu Picchu","Lima"));
    colecciondePreguntasDificultad4.push(new Pregunta("Ciencia","¿Cómo se llama a la muerte de cada miembro de una especie?","Extinción","Exterminio","Matanza","Fulminación"),new Pregunta("Ciencia","¿Qué biólogo propuso la teoría de la evolución a través de la selección natural?","Charles Darwin","Charles Chaplin","Albert Einstein","Platon"),new Pregunta("Ciencia","¿Cuál es el símbolo químico del oro?","Au","Or","Do","Ou"));
    colecciondePreguntasDificultad4.push(new Pregunta("Deporte","¿A qué deporte pertenece el córner corto?","hockey sobre césped","Futbol","Críquet","Futbol Americano"),new Pregunta("Deporte","¿Quién fue la primera mujer en ganar una medalla olímpica?","Charlotte Reinagle Cooper","Serena Williams","Maria Sharápova","Steffi Graf"),new Pregunta("Deporte","¿Cuáles son los colores de los cinco anillos olímpicos?","Azul, amarillo, verde, rojo y negro","Azul y amarillo","rojo y negro","Azul, amarillo, verde y rojo "));
    //Dificultad 5--------------------------
    colecciondePreguntasDificultad5.push(new Pregunta("Arte y literatura","¿Cuál de estas obras de teatro es obra de Federico García Lorca?","La casa de Bernarda Alba","Cinco horas con Mario","Tres sombreros de copa","La venganza de Don Mendo"),new Pregunta("Arte y literatura","¿En que siglo nació Miguel de Cervantes?","Siglo XVI","Siglo XVII","Siglo XIV","Siglo XV"),new Pregunta("Arte y literatura","¿Cuál de estos NO era famoso por ser un poeta?","Gabriel Garcia Márquez","Antonio Machado","Gustavo Adolfo Bécquer","Pablo Neruda"));
    colecciondePreguntasDificultad5.push(new Pregunta("Historia","¿Cómo se llamaba el cañón alemán más famoso de la I Guerra Mundial ?","Gran Berta","Mackensen M-14","Luftwaffe","Enola Gay"),new Pregunta("Historia","¿En que país nació Adolf Hitler?","Austria","Suiza","Alemania","Polonia"),new Pregunta("Historia","¿Por qué condenó la Iglesia a Galileo Galilei?","Por decir que la tierra giraba alrededor del Sol","Por decir que la tierra era redonda","Por negar la existencia de Dios","Por decir que la tierra era el centro del universo"));
    colecciondePreguntasDificultad5.push(new Pregunta("Ciencia","¿De qué sustancia están hechas las uñas?","Queratina","Calcio","Melanina","Mielina"),new Pregunta("Ciencia","¿Quién inventó la tabla periódica?","Dmitri Mendeleev","Charles Darwin","Albert Einstein","Socrates"),new Pregunta("Ciencia","¿Qué cohete llevó al hombre a la luna?","El cohete Saturno V","El cohete Lunar V","El cohete Lunar I","El cohete Saturno IV"));
    colecciondePreguntasDificultad5.push(new Pregunta("Deporte","¿Quién inventó el arte marcial llamado Jeet Kune Do?","Bruce Lee","Khabib Nurmagomedov","Jackie Chan","Bodhidharma"),new Pregunta("Deporte","¿Cuál ha sido el partido con mayor cantidad de goles en un mundial?","Austria-Suiza","Brasil-España","Alemania-Belgica","Alemania-Suiza"),new Pregunta("Deporte","¿Cuánto duró el partido de béisbol considerado el más largo de la historia?","7 horas y 20 minutos","9 horas y 10 minutos"," 4 horas y 30 minutos","5 horas "));
    //Array de 5 Arrays que contienen 12 objetos de Tipo Pregunta cada uno. 
    colecionDeTodasLasPreguntas.push(colecciondePreguntasDificultad1,colecciondePreguntasDificultad2,
    colecciondePreguntasDificultad3,colecciondePreguntasDificultad4,colecciondePreguntasDificultad5);
    
    return colecionDeTodasLasPreguntas;
}
/**
 * Esta funcion genera un número aleatorio entre un rango.
 * Este rango esta definido por un número minimo y un número maximo.
 * @param {número minimo} min 
 * @param {número maximo} max 
 * @returns 
 */

export function aleatorio(min,max){
    let resultado;
    resultado=Math.floor((Math.random()*(max-min-1))+min);
    return resultado;
} 
