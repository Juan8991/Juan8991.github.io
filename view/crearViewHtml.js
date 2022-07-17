import { oprimirBotonDeRespuesta,obtenerPuntajeAcumulado,finalizarJuego } from "/App.js";
/**
 * Esta función crea todos los elementos HTML utilizados en nuestro aplicativo web
 * mediante el Document Object Model 
 */
export const juegoPreguntasView = () => {
    /**Llamamos el div container que utilizamos para contener el resto de etiquetas*/
    const containerPrincipal = document.querySelector("#container-principal");
    const juegoContainer = document.createElement("div");
    const tittleJuego = document.createElement("h1");
    tittleJuego.textContent="Juego de preguntas";
    /**
     * Elemento tipo Span para mostrar el premio
     * que podrá obtener el jugador en cada ronda
     */
    const premio=document.createElement("span");
    premio.textContent="Premio ronda actual: 100 puntos";
    premio.id="premio"
    /**
     * Elemento tipo Span para mostrar los puntos obtenidos
     * por el jugador
     */
    const puntajeJugador=document.createElement("span");
    puntajeJugador.textContent="Tus puntos: 0 puntos";
    puntajeJugador.id="puntaje"
    const hr=document.createElement("hr");
    /**
     * Elemento tipo Span para mostrar los puntos obtenidos
     */
    const categoriaPregunta=document.createElement("span");
    categoriaPregunta.textContent="Matematicas";
    categoriaPregunta.id="categoria"
    /**
     * Elemento tipo h2 para mostrar la pregunta
     */
    const enunciadoPregunta=document.createElement("h2");
    enunciadoPregunta.textContent="SOY UNA PREGUNTAAAAA"
    enunciadoPregunta.id="preguntaH"
    /**
     * Elemento tipo div para contener los 4 botones de
     * las posibles respuesta
     */
    const opciones = document.createElement("div");

    /**
     * Elemento tipo button que al ser presionado llama a la funcion
     * oprimirBotonDeRespuesta() la cual recibe como parametro el texto
     * actual del boton.
     */
    const opcionBtn1 = document.createElement("button");
    opcionBtn1.classList.add("opcion-bnt");
    opcionBtn1.id = "bton1";
    opcionBtn1.textContent = "x";
    opcionBtn1.addEventListener("click",()=>{
        oprimirBotonDeRespuesta(opcionBtn1.textContent);
    })

    /**
     * Elemento tipo button que al ser presionado llama a la funcion
     * oprimirBotonDeRespuesta() la cual recibe como parametro el texto
     * actual del boton.
     */
    const opcionBtn2 = document.createElement("button");
    opcionBtn2.classList.add("opcion-bnt");
    opcionBtn2.id = "bton2";
    opcionBtn2.textContent = "x";
    opcionBtn2.addEventListener("click",()=>{
        oprimirBotonDeRespuesta(opcionBtn2.textContent);
    })

    /**
     * Elemento tipo button que al ser presionado llama a la funcion
     * oprimirBotonDeRespuesta() la cual recibe como parametro el texto
     * actual del boton.
     */
    const opcionBtn3 = document.createElement("button");
    opcionBtn3.classList.add("opcion-bnt");
    opcionBtn3.id = "bton3";
    opcionBtn3.textContent = "x";
    opcionBtn3.addEventListener("click",()=>{
        oprimirBotonDeRespuesta(opcionBtn3.textContent);
    })

    /**
     * Elemento tipo button que al ser presionado llama a la funcion
     * oprimirBotonDeRespuesta() la cual recibe como parametro el texto
     * actual del boton.
     */
    const opcionBtn4 = document.createElement("button");
    opcionBtn4.classList.add("opcion-bnt");
    opcionBtn4.id = "bton4";
    opcionBtn4.textContent = "x";
    opcionBtn4.addEventListener("click",()=>{
        oprimirBotonDeRespuesta(opcionBtn4.textContent);
    })
    const hr2=document.createElement("hr");
    /**
     * Elemento tipo button que al ser presionado llama a la función
     * obtenerPuntajeAcumulado() la cual devuelve el puntaje del jugador 
     * y a su vez es pasado como parametro a la funcion finalizarJuego()
     */
    const btnSalir = document.createElement("button");
    btnSalir.classList.add("btn-salir");
    btnSalir.id = "salirBtn";
    btnSalir.textContent = "Retirarme";
    btnSalir.addEventListener("click",()=>{
        let puntaje=obtenerPuntajeAcumulado();
        finalizarJuego(puntaje);
    })

    const br=document.createElement("br");
    /**
     * Elemento tipo p para mostrar la ronda actual del Juego
     */
    const rondaJuego=document.createElement("p");
    rondaJuego.textContent="1 de 5";
    rondaJuego.id="ronda"
    const br2=document.createElement("br");

    
    opciones.classList.add("opciones-container");
    /**
     * Agregamos a el div todos lo botones
     */
    opciones.append(opcionBtn1,opcionBtn2,opcionBtn3,opcionBtn4)
    juegoContainer.classList.add("juego-container");
    /**
     * Agregamos a el div el tiltulo, premio, puntaje, categoria,
     * pregunta, el div de los botones, el boton salir y la ronda. 
     */
    juegoContainer.append(tittleJuego,premio,br2,puntajeJugador,hr,categoriaPregunta,enunciadoPregunta,opciones,hr2,btnSalir,br,rondaJuego);
    containerPrincipal.appendChild(juegoContainer);
}