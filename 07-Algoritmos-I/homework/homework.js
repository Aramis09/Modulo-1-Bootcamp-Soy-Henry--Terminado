'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {//aplique recursividad porque me  tiene traumado.
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let fact = [1] //Lo hice con recursividad porque quede traumado con el arbol.
  if(!num){return 'Ingreso un cero'}
  if(num === 1){return [1]}
  return r(num,2,fact);
 
  function r(n,p,factores){
    if(n===p){
     factores.push(p);
     return factores
    }
    if(n%p===0){
      factores.push(p);
      return r(n/p,p,fact);
   }
    else{return r(n,p+1,fact)}
  } 
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let x = 'inicio';
  while(x!=='Terminado'){
    for(let i = 0 ; i < array.length-1 ; i++){
      if(array[i]>array[i+1]){
        let aux = array[i];
        array[i]=array[i+1];
        array[i+1]=aux;
        }
    }
    let broke = 0;
    for(let i = 0 ; i < array.length-1 ; i++){
      if(broke === 1){ break}
      for(let j = i+1 ; j < array.length ; j++){
        if(array[i] > array[j]){
          broke = 1 ;
        } 
        else{
          if(array[i]===array[array.length-2] && broke === 0){ x = 'Terminado'}
        } 
      }
    }
  }
  return array;
}
  
    
  


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length-1; i++) {
    if(array[i]>array[i+1]){
      let aux = array[i+1]
      array[i+1]= array[i]
      array[i]=null
      if(i===0){ 
        array[0]=aux
      }
      else{
        for (let j = i-1; j >= 0; j--) {
          if(array[j]<aux){
            array[j+1]= aux
            break
          }
          else{
            array[j+1]=array[j]
            array[j]=null
            if(array[0]===null){ 
              array[0]=aux
              break
            }
          }
        }
      }
    }
  }
    return array
    
}  





function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let menor = array[0] // Este no me salio
  let indexMenor = 0
  let x = 'No_terminado'
  while(x !== 'Terminado'){
    for (let i = 0; i < array.length; i++) {
      if(array[i]<menor){
        menor = array[i]
        indexMenor = i
      }
    }
    array[indexMenor]= array[0]
    array[0]=menor
    let broke = 0
      for (let k = 0; k < array.length-1; k++) {
        if(broke===1){ break}
        for (let j = k+1; j < array.length; j++) {
          if( array[k] > array[j]){  
            broke = 1
          }
          else if(array[k]===array[array.length-2] && broke === 0){ x = 'Terminado'} {
            x = 'Terminado'
          } 
        }
      }
    }
    return array
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
