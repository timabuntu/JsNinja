class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  #saldo = 0;

  sacar(valor) {
    if (this.#saldo >= valor) {
      this.#saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }
}

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
