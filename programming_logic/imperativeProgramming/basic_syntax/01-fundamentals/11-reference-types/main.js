// Tipos de Referência

//? Tipos Primitivos são armazenados na STACK
//* A STACK é mais rápida
/* 
-Numbers
-Strings
-Booleans
-Null
-Undefined
-Symbol
-BigInt
*/

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

//------------------------------------------------------------------------------

//? Tipes de Referência é armazenado no HEAP
//* A HEAP é mais lento
/* 
-Todos os tipos de objetos
-Objetos Literais
-Arrays
-Funções
-Datas
-Todos os outros objetos
*/

let userOne = { name: "Thiago", age: 39 };
let userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 40;

console.log(userOne, userTwo);
