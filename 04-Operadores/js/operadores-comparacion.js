// OPERADORES DE COMPARACION

// COMPARACION DE IGUALDAD
// (==) Igualdad suave
console.log('IGUALDAD SUAVE');
var num1 = 5;
var num2 = 3;

var result = num1 == num2;
console.log(num1, num2, result);

num2 = '3';
result = num1 == num2;
console.log(num1, num2, result);

num2 = '5';
result = num1 == num2;
console.log(num1, num2, result);

// (===) Igualdad estricta
console.log('IGUALDAD ESTRICTA');
result = num1 === num2;
console.log(num1, num2, result);

// COMPARACION NO IGUAL (!=)
// (!=) No igual suave
console.log('NO IGUAL SUAVE');
num2 = 4;
result = num1 != num2;
console.log(num1, num2, result);

num2 = '4';
result = num1 != num2;
console.log(num1, num2, result);

num2 = '5';
result = num1 != num2;
console.log(num1, num2, result);

// (!==) No igual estricto
console.log('NO IGUAL ESTRICTO');
num2 = 4;
result = num1 !== num2;
console.log(num1, num2, result);

num2 = '5';
result = num1 !== num2;
console.log(num1, num2, result);

// COMPARACION MAYOR QUE O MAYOR O IGUAL QUE (> >=)

console.log('MAYOR QUE');
num1 = 5;
num2 = 4;
result = num1 > num2;
console.log(num1, num2, result);

num1 = 4;
num2 = 6;
result = num1 > num2;
console.log(num1, num2, result);

console.log('MAYOR O IGUAL QUE');
num1 = 5;
num2 = 5;
result = num1 >= num2;
console.log(num1, num2, result);

num1 = 4;
num2 = 6;
result = num1 >= num2;
console.log(num1, num2, result);

// COMPARACION MENOR QUE O MENOR O IGUAL QUE (< <=)
console.log('MENOR QUE');
num1 = 5;
num2 = 4;
result = num1 < num2;
console.log(num1, num2, result);

num1 = 4;
num2 = 6;
result = num1 < num2;
console.log(num1, num2, result);

console.log('MENOR O IGUAL QUE');
num1 = 5;
num2 = 5;
result = num1 <= num2;
console.log(num1, num2, result);

num1 = 4;
num2 = 6;
result = num1 <= num2;
console.log(num1, num2, result);

