const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]


var countArray = function(array) {
    // Tu código aca:
    let suma =0
    for(let i = 0 ; i < array.length ; i++){
        if(typeof(array[i])==='number'){
            suma += array[i];
        }
        else {countArray(array[i])
            suma += countArray(array[i])
        }
    }
    return suma;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
 /*var obj = {
   a: {
     a1: 10,
     a2: 'Franco',
     a3: {f: 'r', a: 'n', c: {o: true}}
  },
   b: 2,
   c: [1, {a: 1}, 'Franco']
}*/
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:   //que yo sepa esto no anda pero boeno. Codigo del instructor.
    let counter = 0 
    for(let prop in obj){
       counter ++
       if(typeof(obj[prop]) === 'object'){
          if(!Array.isArray(obj[prop])){
            counter += countProps(obj[prop])
          }else{
            counter +=rArrey(obj[prop])
        }                      //modificacion mia
       }
      }
     return counter 
    
     function rArrey(propArray){
        for(let i in propArray){
            if(Array.isArray(propArray[i])){
                rArrey(propArray[i])
            }else if(typeof(propArray[i]) ==='object'){
               return countProps(propArray[i]) - 1
            }
        }
     }
    }



// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    let aux = this.head;
    let changes = 0;
    while(aux){
        if(isNaN(Number(aux.value))){
            changes ++;
            aux.value = 'Kiricocho';
        }
            aux = aux.next;
        }
    return changes;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo: FIFO
// - queueOne: [7,3,5]   
// - queueTwo: [2,4,6]                
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    let queue = new Queue();//           5-2 = 3-1
    let aux2 = queueTwo.array;//           [1,2,3,5,7,9]
    let aux = queueOne.array; //                 [2,4,6]              
    for(let i = aux2.length - 1 ; i >=0  ; i--){      //[5,2,7,4,9,6]
        queue.array.unshift(aux2[i]);
        if(aux[i] !== undefined){           [7,3,5]
            queue.array.unshift(aux[i]);
        } 
    }
    let restantes = aux.slice(0,aux.length-aux2.length)
    restantes.forEach(element => {
        queue.array.unshift(element)
    });
    return queue 
    
    
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:

    return function(numero){
        return numero * multiplier
    }
}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:


}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}