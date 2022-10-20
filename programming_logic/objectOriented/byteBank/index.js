import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// CLIENTE 1*************************************************************
const cliente1 = new Cliente();
cliente1.nome = "Thiago";
cliente1.cpf = 111222333444;

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.agencia = 1001;

contaCorrenteThiago.sacar(70);
contaCorrenteThiago.depositar(300);

console.log(contaCorrenteThiago);

// CLIENTE 2*************************************************************
const cliente2 = new Cliente();
cliente2.nome = "Fernanda";
cliente2.cpf = 999888777666;

const contaCorrenteFernanda = new ContaCorrente();
contaCorrenteFernanda.agencia = 2002;

contaCorrenteFernanda.sacar(250);
contaCorrenteFernanda.depositar(50);

console.log(contaCorrenteFernanda);
