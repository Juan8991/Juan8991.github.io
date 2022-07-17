/**
 * La clase Pregunta recibe en su contructor 6 parametros:
 * La categoria de la pregunta, la pregunta, la respuesta
 * correcta y 3 respuesta incorrectas.
 */
export class Pregunta{
  constructor(categoria,pregunta,respuesta,rincorrecta1,rincorrecta2,rincorrecta3){
    this.categoria=categoria;
    this.pregunta=pregunta;
    this.rcorrecta=respuesta;
    this.incorrecta1=rincorrecta1;
    this.incorrecta2=rincorrecta2;
    this.incorrecta3=rincorrecta3;  
  }
}