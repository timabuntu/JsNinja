class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}

// CLIENTE 1*************************************************************
const cliente1 = new Cliente();
cliente1.nome = "Thiago";
cliente1.cpf = 111222333444;

const contaCorrenteThiago = new ContaCorrente();
contaCorrenteThiago.saldo = 0;
contaCorrenteThiago.agencia = 1001;

contaCorrenteThiago.saldo = 100;
console.log(contaCorrenteThiago.saldo);
contaCorrenteThiago.sacar(70);
contaCorrenteThiago.depositar(300);

console.log(cliente1);
console.log(contaCorrenteThiago.saldo);

// CLIENTE 2*************************************************************
const cliente2 = new Cliente();
cliente2.nome = "Fernanda";
cliente2.cpf = 999888777666;
const contaCorrenteFernanda = new ContaCorrente();
contaCorrenteFernanda.saldo = 0;
contaCorrenteFernanda.agencia = 2002;

contaCorrenteFernanda.saldo = 200;
console.log(contaCorrenteFernanda.saldo);
contaCorrenteFernanda.sacar(250);
contaCorrenteFernanda.depositar(50);

console.log(cliente2);
console.log(contaCorrenteFernanda.saldo);
