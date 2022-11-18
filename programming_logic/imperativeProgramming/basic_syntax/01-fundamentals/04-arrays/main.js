//? Arrays
let heroes = ["Batman", "Superman", "CatWoman", "IronMan"];
const ages = [32, 23, 39, 45, 23];
const randomArray = ["Parkey", "Diana", 19, 18];

console.log(heroes[1]);
console.log(heroes[3 - 1]);
console.log(ages[2]);

//* Tipos diferentes de dados
console.log(randomArray);

//* Atribuir "Sobrescrever" valor a um array
heroes[0] = "Flash";
console.log(heroes[0]);

//? Métodos de arrays
//! Length verifica o comprimento do Array
console.log(heroes.length);

//! Join concatena todos os valores do array com virgula
console.log(heroes.join());
console.log(heroes.join(" - "));

//! IndexOf procura o valor dentro do array
//* Se tiver o mesmo valor ele retorna o primeiro encontrado
console.log(ages.indexOf(23));

//* Se não tiver o valor ele retorna -1
console.log(ages.indexOf(33));

//! Concat concatena  arrays e não altera o array original
const moreHeroes = ["Hulk", "Thor", "Wolverine"];
console.log(heroes.concat(moreHeroes));

//! Push adiciona um valor no final do array e altera o array original, causando uma mutação
const pushToHeroes = heroes.push("SpiderMan", "CaptainAmerica", "Cyclops");
console.log(heroes);

//! Pop remove o ultimo valor do array retornando o item, alterando o array original, causando uma mutação
const popFromHeroes = heroes.pop();
console.log(popFromHeroes);
console.log(heroes);

//! Shift remove o primeiro valor do array , alterando o array original, causando uma mutação
const shiftFromHeroes = heroes.shift();
console.log(shiftFromHeroes);
console.log(heroes);

//! Unshift insere os valores fornecidos no início , alterando o array original, causando uma mutação
heroes.unshift("Justiceiro", "Soldado Invernal", "Medusa");
console.log(heroes);

//! Find retorna o primeiro elemento encontrado, não alterando o array original
const searchHeroSuperman = heroes.find((hero) => hero === "Superman");
console.log(searchHeroSuperman);
console.log(heroes);
