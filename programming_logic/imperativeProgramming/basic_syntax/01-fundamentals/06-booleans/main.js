// Booleanos e comparações
console.log(true, false, "true", "false");

// Métodos podem retornar booleans
const email = "brucewayne@web.com.br";
const includes = email.includes("@");
const names = ["Dio", "Roger", "Robert"];
const arrayIncludes = names.includes("Roger");

console.log(includes);
console.log(arrayIncludes);

// Operadores de comparação (==, ===, !=, !==, >, <, >=, <=)
// comparação de valores
const age = 18;

console.log(age == 18);
console.log(age == 21);
console.log(age != 25);
console.log(age != 18);
console.log(age > 15);
console.log(age < 18);
console.log(age >= 18);
console.log(age <= 18);

// comparação de strings
const name = "thiago";

console.log(name == "Thiago");
console.log(name == "thiago");
console.log(name > "vanessa");
console.log(name > "Vanessa");

// comparação de tipos
const number = 2000;

console.log(number === "2000");
console.log(number === 2000);

console.log(number !== "2000");
console.log(number !== 2000);
