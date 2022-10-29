import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// CLIENTES *************************************************************
const cliente1 = new Cliente("Thiago", 111222333444);
const cliente2 = new Cliente("Fernanda", 999888777666);
// console.log(cliente2.cpf);

const contaCorrenteThiago = new ContaCorrente(1001, cliente1);
contaCorrenteThiago.depositar(500);
const contaCorrenteFernanda = new ContaCorrente(2002, cliente2);

console.log(ContaCorrente.numeroDeContas);
