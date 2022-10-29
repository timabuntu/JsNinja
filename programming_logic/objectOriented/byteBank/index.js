import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// CLIENTE 1*************************************************************
const cliente1 = new Cliente("Thiago", 111222333444);

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.agencia = 1001;
contaCorrenteThiago.cliente = cliente1;

// CLIENTE 2*************************************************************
const cliente2 = new Cliente("Fernanda", 999888777666);

const contaCorrenteFernanda = new ContaCorrente();
contaCorrenteFernanda.agencia = 2002;
contaCorrenteFernanda.cliente = cliente2;

console.log(cliente2);
