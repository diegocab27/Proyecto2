![banner](https://github.com/diegocab27/proyecto1/assets/162330383/d1251c1c-916c-4b7c-b57b-cab573e44281)

# PROYECTO 2: Proyecto 2 Sistema de Votación en Javascript

En este proyecto se logra realizar un sistema de votación donde se puede crear un cuestionario con 8 preguntas, cada una con 3 alternativas. El usuario es capaz de votar, ver los resultados en tiempo real y guardar el cuestionario ya votado en un array.

Esto fue desarrollado implementando programación funcional y programación orientada a objetos.

## Autor
- Diego Cabrera Carrasco  [@diegocab27](https://www.github.com/diegocab27)

## Planteamiento

Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debe cumplir con los siguientes requisitos:

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.
- Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).

## Solución explicada paso a paso (PF)

#### 1. Se declara el array `encuesta` y la funcion `crearEncuesta`

Se declara el array `encuesta` donde se almacenaran las preguntas que se iran creando en la funcion `crearEncuesta`. Con un bucle `while` se iran creando las preguntas con un enunciado y 3 opciones hasta llegar a un maximo de 8 preguntas.

```scss
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

```

#### 2. Funcion `votarEncuesta`

Se crea funcion de `votarEncuesta` y se definen las variables `listaOpciones`,`voto` y `opcion` luego en un bucle `while` definimos que mientras la variable `opcion` sea menor al largo del array `encuesta` nos muestre el mensaje de cada pregunta con sus opciones y nos premita votar siempre que elijamos entre las 3 opciones disponibles.

```scss
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

```

#### 3. Funcion `mostrarREsultado`

Se crea la funcion `mostrarREsultado` en la cual con el metodo `forEach` recorre el array `encuesta` y muestra el enunciado de cada pregunta con la opcion eliga por nosotros.

```scss

//Muestra el resultado actual de la encuesta
function mostrarResultados(){
    let resultados =''
    encuesta.forEach(numero => 
        resultados += `${numero.enunciado}\n voto: ${numero.opcionElegida}\n`
    )
    alert(resultados)
    console.log(resultados)
}

```

#### 4. Funcion `guardarResultado` y array `encuestaResulatdos`

Se crea la funcion `guardarResultado` en la cual con el metodo `.map` creamos una copia de la encuesta de los enunciados y las opciones elegidas y estas se guardan en la variable `resultado` para luego con el metodo `.push` lo introducimos en el array `encuestaResulatdos` y asi ir almacenado las encuestas que vayamos votando.

```scss

//Guarda la encuesta con cada opcion seleccionada en un nuevo array
function guardarResultados(){

    resultados = encuesta.map(function (posicion){
    
    return { 
        enunciado:posicion.enunciado,
        opcionElegida:posicion.opcionElegida
    }

    }),

    encuestaResultados.push(resultados)
    console.log('La encuesta ha sido guardada'),
    alert('La encuesta ha sido guardada')

}

//arrays de encuestas Guardadas
let encuestaResultados = []

```

## Solución explicada paso a paso (POO)

#### 1. Se crea la clase  `encuesta` y el metodo `crearEncuesta`

Se crea la clase `encuesta` la cual sera el prototipo para las encuestas que necesitemos realizar y creamos el metodo `crearEncuesta` con un bucle `while` y definimos un contador de hasta 8 preguntas con 3 opciones cada una.Cada pregunta creada se ira almacenando en el array de la nueva encuesta con el metodo `.push`

```scss


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

  ```

#### 2. Metodo `votarEncuesta`

Se crea el metodo `votarEncuesta` y se define a traves de un bucle `while` que muestre las diferentes preguntas con sus opciones y que el usuario pueda votar entre ellas si el voto no es valido le aparecera un mensaje para que lo vuelva a ingresar.

```scss
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

 ```


 #### 3. Metodo `mostrarResultados`

Se crea el metodo `mostrarResultados` donde con el metodo `.forEach` recorremos la encuesta mostrando el enunciado con la opcion elegida.

```scss

  //Muestra el resultado actual de la encuesta
  mostrarResultados(){
      let resultados =''
       this.encuesta.forEach(numero => 
      resultados += `${numero.enunciado}\n voto: ${numero.opcionElegida}\n`
    )
     alert(resultados)
     console.log(resultados)
  }

 ```

 #### 4. Metodo `guardarResultados`

 Se crea el metodo guardar resultado en que con el metodo `.map` guardamos en una variable `resultados` el enunciado y la opcion elegida para luego con el metodo `.push` la introducimos en el array `encuestasGuardadas` y asi almacenamos las encuestas que vayamos votando.

 ```scss
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

 ```