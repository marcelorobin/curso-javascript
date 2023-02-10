// OPERADORES MATEMATICOS

// SUMA
var num1 = 5;
var num2 = 8;

var suma = num1 + num2;
console.log(num1, num2, suma);

var suma = num1 + num2 + 200;
console.log(num1, num2, suma);

// RESTA
var resta = num1 - num2;
console.log(num1, num2, resta);

num1 = 20.3;
resta = num1 - num2;
console.log(num1, num2, resta);

// MULTIPLICACION
var multiplicacion = num1 * num2;
console.log(num1, num2, multiplicacion);

multiplicacion = num1 * num2 * 10;
console.log(num1, num2, multiplicacion);

// DIVISION
var division = num1 / num2;
console.log(num1, num2, division);

// MODULO - EL RESTO DE UNA DIVISION
num1 = 10;
num2 = 2;
var modulo = num1 % num2;
console.log(num1, num2, modulo);

num1 = 10;
num2 = 3;
var modulo = num1 % num2;
console.log(num1, num2, modulo);

// INCREMENTO DE UNA VARIABLE
num1 = 10;
num1 = num1 + 1;        // Incremento en una unidad la variable num1
console.log(num1);

num1++;
console.log(num1);

num1 = num1 - 1;        // Decremento en una unidad la variable num1
console.log(num1);

num1--;
console.log(num1);

// PRECEDENCIA DE UNA OPERACION ARITMETICA
var num = 5 + 3 * 2;
console.log(num);       // Resultado 11

num = (5 + 3) * 2;
console.log(num);       // Resultado 16

num = 6 / 2 + 4;
console.log(num);       // Resultado 7

num = 6 / (2 + 4);
console.log(num);       // Resultado 1

// OPERADORES DE ASIGNACIÓN
console.log('OPERADORES DE ASIGNACIÓN');

// SIMBOLO (=) - ASIGNACIÓN
var firstName = 'Carlos';
console.log(firstName);

firstName = 'María';
console.log(firstName);

// SIMBOLO (+=) - SUMA Y ASIGNACIÓN
var numero = 5;
console.log(numero);

numero = numero + 5;
console.log(numero);

numero += 5;
console.log(numero);

// SIMBOLO (-=) - RESTA Y ASIGNACION
numero -= 3;            // numero = numero - 3;
console.log(numero);

// SIMBOLO (*=) - MULTIPLICACIÓN Y ASIGNACIÓN
numero *= 2;            // numero = numero * 2;
console.log(numero);

// SIMBOLO (/=) - DIVISION Y ASIGNACION
numero /= 6;
console.log(numero);

// SIMBOLO (%=) - MODULO Y ASIGNACION
numero %= 2;
console.log(numero);