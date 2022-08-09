//? Inteiros e Decimais
const radius = 10;
const pi = 3.14;

console.log(radius, pi);

//? Operadores aritméticos
const reminder = 5 % 2;
const area = pi * radius ** 2;

console.log(reminder);
console.log(area);

//? Ordem de operações
//* 1° parênteses
//* 2° expoentes ou raízes
//* 3° multiplicação e divisão
//* 4° adição e subtração

const crazyOperation = 5 * (10 - 3) ** 2;

console.log(crazyOperation);

//? Operadores de incremento e decremento
let postLikes = 10;

postLikes = postLikes + 1;
console.log(postLikes);

//* Shorthand
postLikes++;
console.log(postLikes);

//* Shorthand
postLikes--;
console.log(postLikes);

// ? Operadores addition, subtraction, multiplication e division assignment
postLikes = postLikes + 10;
console.log(postLikes);

//* Shorthand Addition assignment
postLikes += 10;
console.log(postLikes);

//* Shorthand Subtraction assignment
postLikes -= 1;
console.log(postLikes);

//* Shorthand Multiplication assignment
postLikes *= 3;
console.log(postLikes);

//* Shorthand Division assignment
postLikes /= 2;
console.log(postLikes);

// NaN - not a number
console.log(7 / "oi");

// Concatenação de string com número
const likesMessage = "O post tem " + postLikes + " Likes.";

console.log(likesMessage);
