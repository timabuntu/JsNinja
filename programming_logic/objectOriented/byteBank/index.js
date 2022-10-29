import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// CLIENTES *************************************************************
const cliente1 = new Cliente("Thiago", 111222333444);
const cliente2 = new Cliente("Fernanda", 999888777666);
console.log(cliente2.cpf);

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.agencia = 1001;
contaCorrenteThiago.cliente = cliente1;

const contaCorrenteFernanda = new ContaCorrente();
contaCorrenteFernanda.agencia = 2002;
contaCorrenteFernanda.cliente = cliente2;
