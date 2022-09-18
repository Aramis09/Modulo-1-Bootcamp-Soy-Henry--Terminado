'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // necesitamos dar vuelta el numero para que las posiciones del numero en binario coicida con la de los arreglos. (split(""). reverse())
  let numString = String(num).split(""). reverse(); // hacemos esto para poder seleccionar las posiciones de cada numero.
  let weight = 0;
  for( let i =0  ; i < numString.length  ; i++) {
    weight = weight + parseInt(numString[i])*Math.pow(2,i); //javascript perm,ite multiplicar una string numero por un numero de verdad
                                                            //por lo que el parseInt esta de mas.
  }
  return weight;
}

function DecimalABinario(num) {
  // tu codigo aca
  let BinaryNum = [];
  let end = num;
  while(end >= 1){ 
    BinaryNum.push(end%2);
    end =  Math.floor(end/2);
  }
  return BinaryNum.reverse().join('') // No lo paso a numero porque sino el test me da mal.
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}