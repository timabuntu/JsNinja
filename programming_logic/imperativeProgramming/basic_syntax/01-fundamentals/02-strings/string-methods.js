// Métodos comuns de strings
const email = "thiagogv2@hotmail.com";

//? O método lastIndexOf() pega a última ocorrência passado no argumento
//! Não modifica a string original
const searchString = email.lastIndexOf("a");
console.log(searchString, email);

//? O método slice() obtém uma parte da string
//! Não modifica a string original
const emailSlice = email.slice(10, 17);
console.log(emailSlice, email);

//? O método replace() substitui uma string por outra
//! Não modifica a string original
const emailReplace = email.replace("hotmail", "gmail");
console.log(emailReplace, email);
