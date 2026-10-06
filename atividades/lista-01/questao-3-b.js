// Lista 01 — questão 3-b
// Produtório de uma quantidade qualquer de números. Execute no navegador por index.html.

function produtorio(...numeros) {
  return numeros.reduce((acumulado, numero) => acumulado * numero, 1);
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

const quantidade = lerNumero("Quantos números entram no produtório?");

if (quantidade === null) {
  alert("Operação cancelada.");
} else if (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Informe uma quantidade inteira maior que zero.");
} else {
  const numeros = [];
  let interrompido = false;

  for (let indice = 1; indice <= quantidade; indice += 1) {
    const numero = lerNumero(`Informe o ${indice}º número:`);

    if (numero === null) {
      alert("Operação cancelada.");
      interrompido = true;
      break;
    }

    if (!Number.isFinite(numero)) {
      alert("Informe um número válido. Operação encerrada.");
      interrompido = true;
      break;
    }

    numeros.push(numero);
  }

  if (!interrompido) {
    const resultado = produtorio(...numeros);
    alert(
      `Produtório: ${resultado.toLocaleString("pt-BR", {
        maximumFractionDigits: 4,
      })}`
    );
  }
}
