import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// CLIENTE 1*************************************************************
const cliente1 = new Cliente();
cliente1.nome = "Thiago";
cliente1.cpf = 111222333444;

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.agencia = 1001;
contaCorrenteThiago.cliente = cliente1;

console.log(contaCorrenteThiago);

// CLIENTE 2*************************************************************
const cliente2 = new Cliente();
cliente2.nome = "Fernanda";
cliente2.cpf = 999888777666;

const contaCorrenteFernanda = new ContaCorrente();
contaCorrenteFernanda.agencia = 2002;
contaCorrenteFernanda.cliente = cliente2;

console.log(contaCorrenteFernanda);
