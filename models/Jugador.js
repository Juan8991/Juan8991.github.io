/**
 * Clase Jugador que recibe 2 parametros y los guarda como atributos propios,
 * nombre y puntaje.
 * Esta clase se utiliza guardar la información de cada jugador, la cual despues
 * se utilizará para guardarse en el localStorage.
 */
export class Jugador{
    constructor(nombre,puntaje){
      this.nombreJugador=nombre;
      this.puntajeJugador=puntaje;
    }
  }