// Lista 01 — questão 3-f
// Conta bancária com depósito, saque e saldo. Execute no navegador por index.html.

function formatarReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function lerNumero(mensagem) {
  const texto = prompt(mensagem);

  if (texto === null) {
    return null;
  }

  const normalizado = texto.trim().replace(",", ".");

  if (normalizado === "") {
    return Number.NaN;
  }

  return Number(normalizado);
}

const contaBancaria = {
  saldo: 0,
  numeroConta: "",

  depositar(valor) {
    if (!Number.isFinite(valor) || valor <= 0) {
      alert("Informe um valor de depósito maior que zero.");
      return;
    }

    this.saldo += valor;
    alert(`Depósito realizado. Saldo atual: ${formatarReais(this.saldo)}.`);
  },

  sacar(valor) {
    if (!Number.isFinite(valor) || valor <= 0) {
      alert("Informe um valor de saque maior que zero.");
      return;
    }

    if (valor > this.saldo) {
      alert("Saldo insuficiente para este saque.");
      return;
    }

    this.saldo -= valor;
    alert(`Saque realizado. Saldo atual: ${formatarReais(this.saldo)}.`);
  },

  informarSaldo() {
    alert(
      `Conta ${this.numeroConta}: saldo atual de ${formatarReais(this.saldo)}.`
    );
  },
};

const numeroConta = prompt("Informe o número da conta:");

if (numeroConta === null || numeroConta.trim() === "") {
  alert("Operação cancelada.");
} else {
  const saldoInicial = lerNumero("Informe o saldo inicial da conta:");

  if (saldoInicial === null) {
    alert("Operação cancelada.");
  } else if (!Number.isFinite(saldoInicial) || saldoInicial < 0) {
    alert("Informe um saldo inicial maior ou igual a zero.");
  } else {
    contaBancaria.numeroConta = numeroConta.trim();
    contaBancaria.saldo = saldoInicial;

    let encerrar = false;

    while (!encerrar) {
      const opcao = prompt(
        `Conta ${contaBancaria.numeroConta}\n1 - Depositar\n2 - Sacar\n3 - Informar saldo\n0 - Sair`
      );

      if (opcao === null || opcao.trim() === "0") {
        encerrar = true;
      } else if (opcao.trim() === "1") {
        const valor = lerNumero("Valor do depósito:");
        if (valor === null) {
          alert("Depósito cancelado.");
        } else {
          contaBancaria.depositar(valor);
        }
      } else if (opcao.trim() === "2") {
        const valor = lerNumero("Valor do saque:");
        if (valor === null) {
          alert("Saque cancelado.");
        } else {
          contaBancaria.sacar(valor);
        }
      } else if (opcao.trim() === "3") {
        contaBancaria.informarSaldo();
      } else {
        alert("Opção inválida. Use 1, 2, 3 ou 0.");
      }
    }
  }
}
