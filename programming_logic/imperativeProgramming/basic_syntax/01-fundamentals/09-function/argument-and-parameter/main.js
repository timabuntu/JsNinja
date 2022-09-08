// Argumentos, Parâmetros e default parameters
const myName = function (name) {
  console.log(`Oi,${name}!`);
};

myName("Thiago");

const fullName = function (name = "José", lastName = "da Silva") {
  console.log(`Seu nome completo é: ${name} ${lastName}`);
};

fullName("Thiago", "Lopes de Mello");
fullName("John doe");
