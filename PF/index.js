let encuesta = []

//Crea un nueva encuesta
function crearEncuesta(){

   
    let contador = 0
    
    while(contador < 8){

        let pregunta={
            enunciado:'',
            opcion1:'',
            opcion2:'',
            opcion3:''
        }
           
     contador ++
     pregunta.enunciado = prompt(`ingrese el enunciado de la pregunta ${contador}`);
     pregunta.opcion1 = prompt('ingrese la primera opcion de la pregunta')
     pregunta.opcion2 = prompt('ingrese la segunda opcion de la pregunta')
     pregunta.opcion3 = prompt('ingrese la tercera opcion de la pregunta')
     encuesta.push(pregunta);
     alert('la pregunta ha sido ingresada a la encuesta')
     }
     alert('la encuesta ha sido completada')

}



//Muetra cada pregunta para ingresar el numero de voto
function votarEncuesta(){ 
    let listaOpciones =''
    let voto = 0
    let opcion = 0
    while ( opcion < encuesta.length){
            listaOpciones = `${encuesta[opcion].enunciado}\n Opcion 1.${encuesta[opcion].opcion1}\n Opcion 2.${encuesta[opcion].opcion2}\n Opcion 3.${encuesta[opcion].opcion3}`
             voto = parseInt(prompt(`seleccione el numero de su opcion\n ${opcion + 1} ${listaOpciones} `))
             if(voto <= 3 && voto > 0){
             console.log(voto),
             encuesta[opcion].opcionElegida = encuesta[opcion]["opcion" + voto]
             opcion ++
             }else{
              alert('Opcion no valida vuelva a ingresar')  
             }
    }
}


//Muestra el resultado actual de la encuesta
function mostrarResultados(){
    let resultados =''
    encuesta.forEach(numero => 
        resultados += `${numero.enunciado}\n voto: ${numero.opcionElegida}\n`
    )
    alert(resultados)
    console.log(resultados)
}
   


//Guarda la encuesta con cada opcion seleccionada en un nuevo array
function guardarResultados(){

   return encuestaResultados = encuesta.map(function (posicion){
    
    return { 
        enunciado:posicion.enunciado,
        opcionElegida:posicion.opcionElegida
    }

    }),
    console.log('La encuesta ha sido guardada'),
    alert('La encuesta ha sido guardada')

}

let encuestaResultados = []





