// Criando um objeto literal

let user = {
  name: "João",
  age: 31,
  email: "joãocardoso@gmail.com",
  city: "Sorocaba",
  blogPosts: ["Empadão de frango", "4 receitas de purê de batata"],
};

console.log(user);

//Modificando valor do objeto com conotação de ponto "."
user.age = 32;

console.log(user.age);

//Modificando valor do objeto com conotação de colchete "[]"
console.log(user["name"]);

user["name"] = "Thiago";

console.log(user["name"]);

const key = "email";

//! console.log(user.key);  o js procura por uma propriedade KEY no objeto USER
console.log(user[key]);

// Verificando o tipo de dado
console.log(typeof user);
