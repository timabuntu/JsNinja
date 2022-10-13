class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Thiago";
cliente1.cpf = 111222333444;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Fernanda";
cliente2.cpf = 999888777666;
cliente2.agencia = 1001;
cliente2.saldo = 2000;

cliente3.nome = "Carol";
cliente3.cpf = 111999222888;
cliente3.agencia = 2002;
cliente3.saldo = 50;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
