'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array; //caso base.Este caso de corde hay que estudiarlo mas.
  let pivot = array[Math.floor(Math.random()*array.length)];// Elige una posicion aleatoria del arreglo.
  let equals =[];
  let left = [];
  let right = [];
  for(let i = 0 ; i < array.length ; i++){// sirve para separar las cosas.
    if(array[i] !== pivot){
      if(array[i] > pivot){
        right.push[array[i]]; //pushea los mayores
      }else {
        left.push[array[i]];
      }
    }
    else equals.push(array[i]); //pushea los que son iguales 
  }
  return quickSort(left).concat(equals).concat(quickSort.right) //Esto es recursividad.

}

function mergeSort(array) { //[3,2,1,5]
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;
  const half = Math.floor(array.length/2);
  let left = array.slice(0,half); //divido en la mitad izquierda.
  let right = array.slice(half,array.length);// divido mitad derecha.
  
  
  array = [];
  left = mergeSort(left);
  right = mergeSort(right);
  while(left.length && right.length){
    if(left[0]< right[0]){
      array.push(left.shift());
    }
    else{
      array.push(right.shift());
    }
  }
  array = array.concat(right.shift());
  return array;
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
