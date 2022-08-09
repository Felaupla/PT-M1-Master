
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // undefined porque es una asignación o ejecución.
var a = 5; //undefined
var b = 10; //undefined

var c = function(a, b, c) { //undefined
  var x = 10;
  console.log(x); //10 ok 
  console.log(a); //8 yo puse 5
  var f = function(a, b, c) { //undef
    b = a; //b=8 
    console.log(b); //8 ok
    b = c; //10
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); //10 porque se ejecutan en contexto global
console.log(x); //1 contexto global
```

```javascript
console.log(bar); //undefined okkkkk
console.log(baz); //crashea o undefined crasheaaaa
foo(); //Hola!!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony"; //undefined
if(true) { //bloque no abre un contexto nuevo
    var instructor = "Franco";
}
console.log(instructor); //Franco


```

```javascript ///este ejercicio está OK
var instructor = "Tony";
console.log(instructor); //tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})(); //función autoejecutable
console.log(instructor); //tony okkk
```

```javascript
var instructor = "Tony";
let pm = "Franco"; //let respeta los bloques no tiene hoisting
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); // Franco nunca se pisó
//let es una versión ,mejorada de var. tiene un scope de bloque. 
//const no cambia, lo quieres redeclarar y se acabó, tira error. no puedes reasignar. 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2 okkk por coerción selectiva
"2" * "3"// 6 okkk
4 + 5 + "px" //9px okk
"$" + 4 + 5 //$45  nooo es $45
"4" - 2 //2 okkkk
"4px" - 2 //NaN no hay concatenación de resta
7 / 0 //Infinity 
{}[0] //0 no es codigo . error, da undefined
parseInt("09") //9  parseInt te convierte en un integer
5 && 2 //2 devuelve el ultimo positivo. ok, pero solo porque como la primera es verdadera me da la segunda. si el primero es falso, me da falso

2 && 5 //5 si la primera es verdadera, me das la segunda
5 || 0  // 5 devuelve el primerO. EL OR SI UNO DE LOS DOS ES VERDADERO, DAME EL VALOR DEL VERDADERO. SI AMBOS SON VERDADEROS ME DA EL PRIMERO
0 || 5 // 5
[3]+[3]-[10] //23 OK
3>2>1 //false 
[] == ![] //true es por la doble igualdad
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  //undefined y 2 okkk 
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //undefined
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

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); 

//Aurelio de Rosa Porque se llama a la propiedad que está dentro de la función getFullName
// Juan Perez // Porque se asigna a test la función y al tener this.fullname va a busvar el fullname que está en el contexto glogal
tendria que dar undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//1,4,3,2 porqué primero va a imprimir las funciones que no tengan timeout y luego las que tengan menos timeoout
```
