"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree() {
  this.root = null;
  this.numberNodes=0;
} 
 BinarySearchTree.prototype.insert = function(data){
  let node = new Node(data);
  if(!this.root){ 
    this.root =node
    return node.data;
  }else{
    this.insertNode(this.root,node)
  }
}



BinarySearchTree.prototype.insertNode = function(currentNode,newNode){
  if(newNode.data < currentNode.data){
    if(!currentNode.nextLeft){
      currentNode.nextLeft = newNode;
      return currentNode.nextLeft.data;
    }
    else this.insertNode(currentNode.nextLeft,newNode);
  }else{
    if(!currentNode.nextRight){
      currentNode.nextRight = newNode;
      return currentNode.nextRight.data;
    }
    else this.insertNode(currentNode.nextRight,newNode);
  }
}


BinarySearchTree.prototype.size=function(){
  if(this.root){this.numberNodes++}
  else{return 'No existen nodos'}
  this.counter(this.root);
  return this.numberNodes;
}

BinarySearchTree.prototype.counter = function(node){
  if(node.nextLeft){ 
    this.numberNodes++;
    this.counter(node.nextLeft);
  }
  
  if(node.nextRight){
    this.numberNodes++;
    this.counter(node.nextRight);
    }    
}

BinarySearchTree.prototype.contains=function(){}


BinarySearchTree.prototype.depthFirstForEach=function(){}
BinarySearchTree.prototype.breadthFirstForEach=function(){}

function Node(data){
  this.data=data;
  this.nextLeft=null;
  this.nextRight=null
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
