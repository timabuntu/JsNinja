// Variáveis e escopo de bloco
const age = 39;

if (true) {
  const age = 41;
  const name = "Thiago";

  console.log(`dentro do 1° bloco de código: ${age} ${name}`);

  if (true) {
    const age = 51;
    console.log(`dentro do 2° bloco de código: ${age}`);

    var test = "oi";
  }
}

console.log(`fora do bloco de código: ${age} e o problema com var ${test}`);
console.log(`tentando acessar ${name}`);
