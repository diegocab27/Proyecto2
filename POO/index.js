
class encuesta  {
    constructor(){
        this.encuesta = [];
  }

//Metodo para crear una encuesta
  crearEncuesta(){
      let contador = 0
      while(contador < 8){
        contador ++
        let pregunta={
          enunciado:'',
          opcion1:'',
          opcion2:'',
          opcion3:''
      }

        pregunta.enunciado = prompt(`ingrese el enunciado de la pregunta ${contador}`);
        pregunta.opcion1 = prompt('ingrese la primera opcion de la pregunta')
        pregunta.opcion2 = prompt('ingrese la segunda opcion de la pregunta')
        pregunta.opcion3 = prompt('ingrese la tercera opcion de la pregunta')
        alert('la pregunta ha sido ingresada a la encuesta')
      this.encuesta.push(pregunta);
       }
    
  }

  //Metodo para votar Encuestas
  votarEncuesta(){
        let listaOpciones =''
        let voto = 0
        let opcion = 0
        while ( opcion < this.encuesta.length){
                listaOpciones = `${this.encuesta[opcion].enunciado}\n Opcion 1.${this.encuesta[opcion].opcion1}\n Opcion 2.${this.encuesta[opcion].opcion2}\n Opcion 3.${this.encuesta[opcion].opcion3}`
                 voto = parseInt(prompt(`seleccione el numero de su opcion\n ${opcion + 1} ${listaOpciones} `))
                 if(voto <= 3 && voto > 0){
                 console.log(voto),
                 this.encuesta[opcion].opcionElegida = this.encuesta[opcion]["opcion" + voto]
                 opcion ++
                 }else{
                  alert('Opcion no valida vuelva a ingresar')  
                 }
        }
  }

  //Muestra el resultado actual de la encuesta
  mostrarResultados(){
      let resultados =''
       this.encuesta.forEach(numero => 
      resultados += `${numero.enunciado}\n voto: ${numero.opcionElegida}\n`
    )
     alert(resultados)
     console.log(resultados)
  }

//Metodo para guardar la encueta votada en el array encuestasGuardadas
  guardarResultados(){

     let resultados = this.encuesta.map(function (posicion){
      return{ 
         enunciado:posicion.enunciado,
         opcionElegida:posicion.opcionElegida,
      }
     })
     encuestasGuardadas.push(resultados)
     console.log('La encuesta ha sido guardada'),
     alert('La encuesta ha sido guardada')
 }
  
}


let encuestasGuardadas = []

const encuesta1 = new encuesta (encuesta)


