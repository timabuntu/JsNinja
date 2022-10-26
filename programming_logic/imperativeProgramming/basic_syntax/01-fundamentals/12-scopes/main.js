// Escopos

// Escopo de funções

function myFunc() {
  let dog = "Bidu";
  const age = 3;
  var color = "gray";
  console.log(age);
}

function myFunc2() {
  var color = "white";
  const age = 5;
  console.log(age);
}

myFunc();
myFunc2();

const cat = "Persa";

function catWatch() {
  const cat = "Siamês";
  console.log(cat);
}

catWatch();
console.log(cat);

// Escopo de Bloco

if (true) {
  const dragon = "Balerion";
  console.log(dragon);
}
if (true) {
  var dragon = "Vhagar";
  console.log(dragon);
}

console.log(dragon);

// Escopo Léxico

const external = () => {
  const book = "Sapiens";

  const internal = () => {
    const book = "Os testamentos";
    console.log(book.toUpperCase());

    const extraInternal = () => {
      console.log(book.toLowerCase());
    };

    extraInternal();
  };
  internal();
};

external();
