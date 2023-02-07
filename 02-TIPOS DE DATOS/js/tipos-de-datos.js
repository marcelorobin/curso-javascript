// TIPOS DE DATOS
/*
Comentario
en varias
líneas
*/

// Antes de ECMAScript6 - se utilizaba "var" para definir una variable
var numberOne = 2;

// Después de ECMAScript6 - se utiliza "let" y "const" para definir una variable
let numberTwo = 3;
const numberThree = 4;

console.log(numberOne, numberTwo, numberThree);

// Tipo de dato NUMBER (número)
let number = 100;
console.log(number);

number = 20.53;
console.log(number);

// para saber el tipo de dato, se usa "typeof"
console.log(typeof number);

// Tipo de dato STRING (cadena)
let firstName = 'Ricardo';
console.log(firstName);
console.log(typeof firstName);

// Cambio de tipo de dato de las variables.
number = firstName;
console.log(number);
console.log(typeof number);

// Tipo de dato BOOLEAN (booleano)
let flag = true;
console.log(flag);
console.log(typeof flag);

flag = false;
console.log(flag);

// Tipo de dato OBJECT (objeto)
let person = {
    firstName: 'Carlos',
    lastName: 'Rodríguez',
    email: 'crodriguez@correo.com'
}
console.log(person);
console.log(typeof person);

// Tipo de dato FUNCTION (función)
function myFunction(){}
console.log(typeof myFunction);

// Tipo de dato UNDEFINED (indefinido)
let myVariable;
console.log(myVariable);
console.log(typeof myVariable);

myVariable = 120;
console.log(myVariable);
console.log(typeof myVariable);

// Tipo de dato NULL (nulo)
let age = null;
console.log(age);
console.log(typeof age);

age = 36;
console.log(age);
console.log(typeof age);

// Tipo de dato ARRAY (arreglo)
let fruits = ['Manzana', 'Naranja', 'Pera', 'Frutilla'];
console.log(fruits);
console.log(typeof fruits);

// Tipo de dato SYMBOL (símbolo)
let mySymbol = Symbol('Este es mi símbolo');
console.log(mySymbol);
console.log(typeof mySymbol);

// Tipo de dato CLASS (clases)
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

console.log(Person);
console.log(typeof Person);