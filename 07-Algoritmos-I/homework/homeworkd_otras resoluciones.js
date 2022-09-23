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

// resolcuion de dai, mucho mas corta y sin recursividad.
function factorear(num){
    let factors = [1];
    let x = 2;
    while(num > 1){
        if(num % x ===0){
            factors.push(x);
        }
        else{
            x++;
        }
    }
    return factors;
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
//resolucion de dai de la Burbuja. // Tengo mis dudas sobre esta forma de resolucion, tengo que hacer la prueba.
function bubbleSort(array){
    let swap = true;
    while(swap){
        swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]){
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] =  aux;
                swap = true;
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
// Resolucion de dai del Insertion Sort. Parece mas corta, no tengo dudas sobre esta.
function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let aux = array[i];
        while(j >= 0 && aux< array[i]){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = aux;
    }
    return array;
}
//Resolucion de dar Selection Sort. No me queda ninguna duda dobre esta resolucion. Es la que me falta.

for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
        if(array[j] < array[min]){
            min = j;
        }
        
    }
    if( i !== min){
        let aux = array[i];
        array[i] = array[min];
        array[min] = aux;
    }
}