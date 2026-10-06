// Lista 01 — questão 2-d
// Soma os números primos de uma sequência. Execute no navegador por index.html.

function ehPrimo(numero) {
  if (!Number.isInteger(numero) || numero < 2) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= numero; divisor += 1) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

function somarPrimos(numeros) {
  let soma = 0;

  for (const numero of numeros) {
    if (ehPrimo(numero)) {
      soma += numero;
    }
  }

  return soma;
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

const quantidade = lerNumero("Quantos números inteiros positivos serão informados?");

if (quantidade === null) {
  alert("Operação cancelada.");
} else if (!Number.isInteger(quantidade) || quantidade <= 0) {
  alert("Informe uma quantidade inteira maior que zero.");
} else {
  const numeros = [];
  let interrompido = false;

  for (let indice = 1; indice <= quantidade; indice += 1) {
    const numero = lerNumero(`Informe o ${indice}º número inteiro positivo:`);

    if (numero === null) {
      alert("Operação cancelada.");
      interrompido = true;
      break;
    }

    if (!Number.isInteger(numero) || numero <= 0) {
      alert("Cada valor precisa ser um inteiro positivo. Operação encerrada.");
      interrompido = true;
      break;
    }

    numeros.push(numero);
  }

  if (!interrompido) {
    alert(`Soma dos números primos: ${somarPrimos(numeros)}`);
  }
}
