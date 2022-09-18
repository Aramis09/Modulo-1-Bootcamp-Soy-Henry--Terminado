
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
>La diferencia es que si no ponemos el 'var', la variable se define en el contesto global sin inportar que este dentro de una funcion. Al poner el 'var' se mantiene dentro del contexto donde esta.
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;     //
  console.log(x); // imprime primero 10
  console.log(a); // imprime segundo 8
  var f = function(a, b, c) {
    b = a;           // b toma el valor  de 8
    console.log(b); //  imprime tercero 8
    b = c;          // b toma el valord de 10
    x = 5;      // 
  }
  f(a,b,c);
  console.log(b); //  imprime 9
}
c(8,9,10);      // 
console.log(b); // imprime 10
console.log(x); // imprime 1
```

```javascript 
console.log(bar);//imprime undefine.
console.log(baz);//baz is not defined
foo();// imprime 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```



```javascript
var instructor = "Tony";
if(true) {
   var instructor = "Franco";
}
console.log(instructor);// imprime Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// imprime Franco
   }
})();
console.log(instructor); //imprime Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);//imprime "The Flash" 
    console.log(pm); //imprime Reverse Flash
}
console.log(instructor);// imprime 'The Flash'
console.log(pm);// imprime Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  // resultado>2
"2" * "3" //resultado>6
4 + 5 + "px"//resultado>9px
"$" + 4 + 5//resultado>$45
"4" - 2    //resultado>2
"4px" - 2  //resultado>Nan
7 / 0      //resultado> infinito
{}[0]      //resultado> undefine
parseInt("09")//resultado> 9
5 && 2        //resultado> 2
2 && 5        //resultado> 5
5 || 0        //resultado> 5
0 || 5        //resultado> 5
[3]+[3]-[10]  //23
3>2>1         //false
[] == ![]      //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);    // imprime undefined
   console.log(foo());//imprime 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix'; // se define en el contexto global.

function getFood(food) { //Dentro de esta funcion js ANTES DE EJECUTAR EL CODIGO busca las variables definidas con 'var' y les asigna un
    if (food) {         //espacio en memoria pero con el valor undefined.
        var snack = 'Friskies'; 
        return snack;     
    }                
    return snack;    // como antes se ejecutar el codigo snack ya se le asigno en memoria un lugar con el valor undefined, se
}                    //  retorna  undefined y no Meow Mix.
                     // Lo normal seria pensar que como no se ejecuto el if, la funcion busque la variable fuera de ella para retornar 'Meow mix', pero esto es un ERROR.

getFood(false); // retorna undefined.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa

var test = obj.prop.getFullname;     
/*  var test = function() { 
         return this.fullname;
      }*/

console.log(test());                 //Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() { //se ejecuta primero todas las instrucciones que no esten en el Timer, luego las del timer en su orden especifico.
   console.log(1); //perimera
   setTimeout(function() { console.log(2); }, 1000); //cuarta
   setTimeout(function() { console.log(3); }, 0); //tercera
   console.log(4); //segunda
}

printing(); 1,4,3,2
```
