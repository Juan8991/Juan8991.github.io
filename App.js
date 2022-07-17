
import {juegoPreguntasView} from "./view/crearViewHtml.js"
import {Jugador} from "./models/Jugador.js"
import {InterfazJuego} from "./models/InterfazJuego.js"
import {agregarTodasLasPreguntas,aleatorio } from "./controller/controller.js"


/**
 * Guardo todas las preguntas en un Array, el cual se lo pasare 
 * como parametro al Objeto de Tipo InterfazJuego con el metodo 
 * agregarPreguntas el cual recibe un array de preguntas.
 */
let arrayPreguntas=agregarTodasLasPreguntas();
/**
 * Creo e inicializo una variable con ronda la cual voy a ir 
 * aumentando cada vez que el jugador elija correctamente
 */
let ronda=1;
/**
 * Esta variable me permite guardar una variable entre 0 y 100
 * el cual voy a utilizar como Key a la hora de guardar en el 
 * localStorage
 */
let Key=aleatorio(0,100);
/**
 * Guarda el puntaje inicial del juego
 */
const puntajeInicial=100;
let puntajeAcumuladoL=0;
let respuestCorrecta;

//INICIO DEL JUEGO

/**
 * Hago el llamado a la funcion que crea todos los elementos HTML de la vista
 */
juegoPreguntasView();
/**
 * Guardo e instacion un Objeto de tipo Interfaz de juego.
 */
let interfaz=new InterfazJuego();
/**
 * le paso el array antes guardado para que lo pueda usar en el metodo
 * mostrar, el cual muestra todas las pregunta con su respuesta y categoria.
 */
interfaz.agregarPreguntas(arrayPreguntas);
respuestCorrecta=interfaz.mostrar();
/**
 * Esta funcion me permite validar si la respuesta seleccionada por el usuario es
 * correcta o incorrecta. Si es correcta, aumento la ronda del juego, actualizo y muestro 
 * el puntaje del jugador y del premio de cada ronda. Y al llegar al final del juego guardo
 * el puntaje del jugador y su nombre y lo guardo en el localStorage
 * @param {Respuesta seleccionada por el jugador} respuesta 
 */
export function oprimirBotonDeRespuesta(respuesta){

    let respuestaElegida=respuesta;

    if(respuestaElegida==respuestCorrecta){
      alert("Correcto!");
      let puntajeAnterior=actualizarPremio(ronda);
      actualizarPuntajeJugador(ronda,puntajeAnterior);
      ronda+=1;
      if(ronda<6){
        actualizarIndex(ronda);
        actualizarPremio(ronda);
        interfaz.rondaJuegoActual(ronda);
        respuestCorrecta=interfaz.mostrar();
      }else{
        alert("Felicitaciones!!!! Has ganado el juego.")
        finalizarJuego(puntajeAcumuladoL);
      }    
    }
    else{
        alert("incorrecto");
        finalizarJuego(0);
    }
}
/**
 * Esta funcion recibe el puntaje acumulado del jugador y le hace una preticion al Jugador
 * para que ingrese su nombre para luego guardarlo en el localStorage y finalmente recarga
 * la pagina para iniciar un nuevo juego.
 * @param {Recibe el puntaje acumulado por el jugador en el momento que se llama la funcion} puntajeFinalJugador 
 */
export function finalizarJuego(puntajeFinalJugador){
  let nombre=window.prompt("Ingresa Tu nombre");
  let jugador=new Jugador(nombre,puntajeFinalJugador);
  localStorage.setItem(`jugador${Key}`,JSON.stringify(jugador));
  location.reload();
}
/**
 * Funcion que me permite actulizar y mostrar el indice o la ronda actual e
 * @param {Recibe la ronda actual} rondaAct 
 */
function actualizarIndex(rondaAct){
  let indice=document.getElementById("ronda");
  indice.innerHTML=`${rondaAct} de 5`;
}
/**
 * Actuliza y muestra el premio actual dependiendo la ronda en la que se encuentre.
 * El premio se calcula dependiendo la ronda, a medida que aumente la ronda el premio
 * aumenta
 * @param {Recibe la ronda actual} rondaAct 
 * @returns 
 */
function actualizarPremio(rondaAct){
  let premioActual=(rondaAct*400);
  let premio=document.getElementById("premio");
  premio.innerHTML=`Premio ronda actual: ${premioActual} puntos`;
  return premioActual;
}
/**
 * Esta funcion permite guarda, actualiza y muestra el puntaje acumulado
 * del jugador
 * @param {*} rondaAct 
 * @param {*} premioActual 
 */
function actualizarPuntajeJugador(rondaAct,premioActual){
  let puntaje=document.getElementById("puntaje");
  if(rondaAct>1){
    puntajeAcumuladoL+=premioActual
    puntaje.innerHTML=`Tus puntos: ${puntajeAcumuladoL} puntos`;
  }else{
    puntajeAcumuladoL+=puntajeInicial;
    puntaje.innerHTML=`Tus puntos: ${puntajeAcumuladoL} puntos`;
  }  
}
/**
 * @returns retorna el puntaje acumulado del jugador
 */
export function obtenerPuntajeAcumulado() {
   return puntajeAcumuladoL
}

