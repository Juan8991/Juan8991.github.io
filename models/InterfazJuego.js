import { aleatorio } from "../controller/controller.js";
/**
 * Las variables indice Minimo y Maximo se inicializan de acuerdo
 * con el tamallo de del Array de cada nivel de dificultad. Como
 * en cada Array tenemos 12 objetos de tipo Pregunta el Indice maximo
 * del Aray es 11 y el minimo es 0.
 */
let indeceMinimo=0;
let indeceMaximo=11;
/**
 * Se llama a la función aleatorio y se guarda el valor obtenido en 
   numeroAleatorio,numeroAleatorio2,numeroAleatorio3 y numeroAleatorio4
   Esto para generar 4 numeros aleatorios entre un rango de 0 a 11.
 */
let numeroAleatorio=aleatorio(indeceMinimo,indeceMaximo);
let numeroAleatorio2=aleatorio(indeceMinimo,indeceMaximo);
let numeroAleatorio3=aleatorio(indeceMinimo,indeceMaximo);
let numeroAleatorio4=aleatorio(indeceMinimo,indeceMaximo);

/**
 * La clase InterfazJuego tiene un contructor con unos atribustos por defecto,
   la ronda de Juego y un Array vacio. Esto con el objetivos de que mediante los metodos
   agregaragregarPreguntas y rondaJuegoActual puedan ser modificados estos atributos 
 */
export class InterfazJuego{
    constructor(){
        this.rondaJuego=1
        this.arrayPreguntas=[];
    }
    /**
     * Este metodo permite agregar el Array que contiene todas las preguntas al Array de la
       clase para que pueda ser manipulada por sus metodos.
     * @param {Array con todas las preguntas que se van a utilizar en el juego} array 
     */
    agregarPreguntas(array){
        this.arrayPreguntas=array;
    }
    /**
     * Este metodo permite actualizar la ronda en la que se encuentra el juego para luego
       ser utilizada.
     * @param {La ronda actual en la que se encuentra el juego} ronda 
     */
    rondaJuegoActual(ronda){
        this.rondaJuego=ronda;
    }
    /**
     *El metodo mostrar utiliza el array de todas las preguntas y la ronda actual del juego 
      para realizar la logica de como se van a mostrar las preguntas. 
     */ 
    mostrar(){
        /**
         * Declaramos estas variables locales que permiten almacener dentro del metodo
         * la pregunta, la categoria, la respuesta correcta y las 3 respuestas incorrectas 
         */
        let pregunta,categoria,respuesta1,respuesta2,respuesta3,respuesta4;
        /**
         * Accedo a los elementos de pregunta y categoria mediante el id y las almaceno
         * para luego poder cambiarle la pregunta y categoria dependiendo la ronda.
         */
        const preguntaEncabezado=document.getElementById('preguntaH');
        const categoriaEncabezado=document.getElementById('categoria');
        if(this.rondaJuego===1){
            /**
             * Si el juego se encuentra en la ronda 1 ingresa a este If y obtiene las
             * preguntas del Array en la posicion 0 en el cual se encuentran los 12 objetos
             * de tipo pregunta de un nivel de dificultad 1. Y para que siempre busque una 
             * pregunta diferente dentro de ese Array le paso como segundo indice un numero 
             * aleatorio entre 0 y 11.
             * 
             */
            pregunta=this.arrayPreguntas[0][numeroAleatorio].pregunta;
            categoria=this.arrayPreguntas[0][numeroAleatorio].categoria;
            respuesta1=this.arrayPreguntas[0][numeroAleatorio].rcorrecta;
            respuesta2=this.arrayPreguntas[0][numeroAleatorio].incorrecta1;
            respuesta3=this.arrayPreguntas[0][numeroAleatorio].incorrecta2;
            respuesta4=this.arrayPreguntas[0][numeroAleatorio].incorrecta3;
            preguntaEncabezado.innerHTML=pregunta;
            categoriaEncabezado.innerHTML=categoria;
            /**
             * Hago un llamado  el metodo propio de esta clase desordenarRespuestas
             * y le paso como parametros las respuestas anteriormente almacenadas
             */
            this.desordenarRespuestas(respuesta1,respuesta2,respuesta3,respuesta4);
            /**
             * Devuelvo la respuesta correcta para luego comprarla con la elección 
             * del jugador
             */
            return respuesta1;
        }
        else if(this.rondaJuego===2){
            /**
             * Si el juego se encuentra en la ronda 2 ingresa a este else If y obtiene las
             * preguntas del Array en la posicion 1 en el cual se encuentran los 12 objetos
             * de tipo pregunta de un nivel de dificultad 2. Y para que siempre busque una 
             * pregunta diferente dentro de ese Array le paso como segundo indice un numero 
             * aleatorio entre 0 y 11.
             * 
             */
            pregunta=this.arrayPreguntas[1][numeroAleatorio2].pregunta;
            categoria=this.arrayPreguntas[1][numeroAleatorio2].categoria;
            respuesta1=this.arrayPreguntas[1][numeroAleatorio2].rcorrecta;
            respuesta2=this.arrayPreguntas[1][numeroAleatorio2].incorrecta1;
            respuesta3=this.arrayPreguntas[1][numeroAleatorio2].incorrecta2;
            respuesta4=this.arrayPreguntas[1][numeroAleatorio2].incorrecta3;
            preguntaEncabezado.innerHTML=pregunta;
            categoriaEncabezado.innerHTML=categoria;
            /**
             * Hago un llamado  el metodo propio de esta clase desordenarRespuestas
             * y le paso como parametros las respuestas anteriormente almacenadas
             */
            this.desordenarRespuestas(respuesta1,respuesta2,respuesta3,respuesta4);
            /**
             * Devuelvo la respuesta correcta para luego comprarla con la elección 
             * del jugador
             */
            return respuesta1;
        }
        else if(this.rondaJuego===3){
            /**
             * Si el juego se encuentra en la ronda 3 ingresa a este else If y obtiene las
             * preguntas del Array en la posicion 2 en el cual se encuentran los 12 objetos
             * de tipo pregunta de un nivel de dificultad 3. Y para que siempre busque una 
             * pregunta diferente dentro de ese Array le paso como segundo indice un numero 
             * aleatorio entre 0 y 11.
             * 
             */
            pregunta=this.arrayPreguntas[2][numeroAleatorio3].pregunta;
            categoria=this.arrayPreguntas[2][numeroAleatorio3].categoria;
            respuesta1=this.arrayPreguntas[2][numeroAleatorio3].rcorrecta;
            respuesta2=this.arrayPreguntas[2][numeroAleatorio3].incorrecta1;
            respuesta3=this.arrayPreguntas[2][numeroAleatorio3].incorrecta2;
            respuesta4=this.arrayPreguntas[2][numeroAleatorio3].incorrecta3;
            preguntaEncabezado.innerHTML=pregunta;
            categoriaEncabezado.innerHTML=categoria;
            /**
             * Hago un llamado  el metodo propio de esta clase desordenarRespuestas
             * y le paso como parametros las respuestas anteriormente almacenadas
             */
            this.desordenarRespuestas(respuesta1,respuesta2,respuesta3,respuesta4);
            /**
             * Devuelvo la respuesta correcta para luego comprarla con la elección 
             * del jugador
             */
            return respuesta1;
        }
        else if(this.rondaJuego===4){
            /**
             * Si el juego se encuentra en la ronda 4 ingresa a este else If y obtiene las
             * preguntas del Array en la posicion 3 en el cual se encuentran los 12 objetos
             * de tipo pregunta de un nivel de dificultad 4. Y para que siempre busque una 
             * pregunta diferente dentro de ese Array le paso como segundo indice un numero 
             * aleatorio entre 0 y 11.
             */
            pregunta=this.arrayPreguntas[3][numeroAleatorio4].pregunta;
            categoria=this.arrayPreguntas[3][numeroAleatorio4].categoria;
            respuesta1=this.arrayPreguntas[3][numeroAleatorio4].rcorrecta;
            respuesta2=this.arrayPreguntas[3][numeroAleatorio4].incorrecta1;
            respuesta3=this.arrayPreguntas[3][numeroAleatorio4].incorrecta2;
            respuesta4=this.arrayPreguntas[3][numeroAleatorio4].incorrecta3;
            preguntaEncabezado.innerHTML=pregunta;
            categoriaEncabezado.innerHTML=categoria;
            this.desordenarRespuestas(respuesta1,respuesta2,respuesta3,respuesta4);
            /**
             * Devuelvo la respuesta correcta para luego comprarla con la elección 
             * del jugador
             */
            return respuesta1;
        }
        else if(this.rondaJuego===5){
            /**
             * Si el juego se encuentra en la ronda 5 ingresa a este else If y obtiene las
             * preguntas del Array en la posicion 4 en el cual se encuentran los 12 objetos
             * de tipo pregunta de un nivel de dificultad 5. Y para que siempre busque una 
             * pregunta diferente dentro de ese Array le paso como segundo indice un numero 
             * aleatorio entre 0 y 11.
             */
            pregunta=this.arrayPreguntas[4][numeroAleatorio4].pregunta;
            categoria=this.arrayPreguntas[4][numeroAleatorio4].categoria;
            respuesta1=this.arrayPreguntas[4][numeroAleatorio4].rcorrecta;
            respuesta2=this.arrayPreguntas[4][numeroAleatorio4].incorrecta1;
            respuesta3=this.arrayPreguntas[4][numeroAleatorio4].incorrecta2;
            respuesta4=this.arrayPreguntas[4][numeroAleatorio4].incorrecta3;
            preguntaEncabezado.innerHTML=pregunta;
            categoriaEncabezado.innerHTML=categoria;
            this.desordenarRespuestas(respuesta1,respuesta2,respuesta3,respuesta4);
            /**
             * Devuelvo la respuesta correcta para luego comprarla con la elección 
             * del jugador
             */ 
            return respuesta1;
        }
              
    }
    /**
     * Este metodo recibe como parametros las 4 posibles respuesta de la pregunta actual
     * deprendindo la ronda, las almacena en un Array, las ordena de manera aleatoria y 
     * luego las muestra. Con este genero diferentes posisiones en la cual puede estar 
     * la respuesta correcta y evito que siempre este en la misma posicion. 
     * @param {Posible respuesta de la pregunta actual} r1 
     * @param {Posible respuesta de la pregunta actual} r2 
     * @param {Posible respuesta de la pregunta actual} r3 
     * @param {Posible respuesta de la pregunta actual} r4 
     */
    desordenarRespuestas(r1,r2,r3,r4){
        let posibleR=[];
        /**
         * Accedo a los elementos de tipo Boton para luego mostrar las respuestas
         * en cada uno de ellos.
         */
        const respuestaC1=document.getElementById("bton1");
        const respuesta2=document.getElementById("bton2");
        const respuesta3=document.getElementById("bton3");
        const respuesta4=document.getElementById("bton4");
        posibleR=[r1,r2,r3,r4];
        posibleR.sort(()=>Math.random()-0.5);
        respuestaC1.innerHTML=posibleR[0];
        respuesta2.innerHTML=posibleR[1];
        respuesta3.innerHTML=posibleR[2];
        respuesta4.innerHTML=posibleR[3];
    }             
}