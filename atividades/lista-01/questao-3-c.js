// Lista 01 — questão 3-c
// Fatorial recursivo. Execute no navegador por index.html.

function fatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  return numero * fatorial(numero - 1);
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

const numero = lerNumero("Informe um inteiro maior ou igual a zero:");

if (numero === null) {
  alert("Operação cancelada.");
} else if (!Number.isInteger(numero) || numero < 0) {
  alert("O fatorial está definido para inteiros maiores ou iguais a zero.");
} else {
  const resultado = fatorial(numero);

  if (!Number.isFinite(resultado)) {
    alert("O número é grande demais para o tipo Number do JavaScript.");
  } else {
    alert(`${numero}! = ${resultado}`);
  }
}
