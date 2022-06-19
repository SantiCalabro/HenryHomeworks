
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;    
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c; 
    var x = 5; 
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
/*

10
8
8
9
10
1

*/

```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; // No tiene Hoisting porque no está declarada. Entonces pasa desapercibida cuando hace esa primera recorrida y anota las variables. 
//var bar = 1 sí tiene hoisting, entonces la capta. Pero cuando llea a "baz" no sabe quién es, entonces da error y ahí se termina el código. Nunca llega a ejecutar la función foo() 

/*

1
error


*/
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

/*

Franco (Sí se pisa!)

*/
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

/*

Tony
Franco
Tony

*/
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

/*

The Flash
Reverse Flash
The Flash
Franco // al ser let, el cambio a Reverse Flash queda en el bloque del if

*/

```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px" Primero se suma y luego se concatena - Siempre de izq a der.
"$" + 4 + 5 //"$45" se concatena, no se suma - Siempre de izq a der.
"4" - 2 // 2 
"4px" - 2 // NaN
7 / 0 // infinity
{}[0] // [0]
parseInt("09") //9
5 && 2 // 2 - los dos deben ser true. El primero lo es, el segundo DEFINE
2 && 5 // 5 - idem arriba
5 || 0 // 5 - primer número es true. El otro ni lo miro (por más que no sea 0)
0 || 5 // 5 - el 0 es false. Lo que define es el 5

[3]+[3]-[10] // 23 -- [3]+[3] = "33" - [10] = 23 (coerción a número)
3>2>1 // false 3>2 es true --> true > 1 = false. Operaciones se resuelven de a una
[] == ![] // true (porque no es igualación estricta)
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
//undefined  -- Sabe quién es "a" porque tomó nota. 
//              Pero ejecutó antes de acceder al valor
// 2

test();
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
// Como sabe que la var snack SÍ está en su contexto, no la va a buscar afuera. 
// Pero como food no era true, nunca pasó a levantar el valor.

getFood(false);
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

console.log(obj.prop.getFullname()); // Aurelio - Está invocando inmediatamente. Por lo cual apunta al ámbito de ejecución de esa función, es decir a obj.prop

var test = obj.prop.getFullname; // Juan Perez - Al guardarse en una var global, lo que llama es al método en obj.prop, pero a donde apunta es por fuera del objeto. Apunta al scope global. 

console.log(test());
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

// 1 - 4 - 3 - 2

printing();
```
