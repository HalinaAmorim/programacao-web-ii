// Lista 01 — questão 2-c
// Calcula a nota final do semestre. Execute no navegador por index.html.
// N1 tem peso 2, N2 tem peso 3 e a aprovação exige nota final maior ou igual a 7.

function calcularNotaFinal(n1, n2) {
  return (n1 * 2 + n2 * 3) / 5;
}

function situacaoFinal(notaFinal) {
  return notaFinal >= 7 ? "Aprovado" : "Reprovado";
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

function notaValida(nota) {
  return Number.isFinite(nota) && nota >= 0 && nota <= 10;
}

const n1 = lerNumero("Informe a nota da N1 (0 a 10):");

if (n1 === null) {
  alert("Operação cancelada.");
} else if (!notaValida(n1)) {
  alert("A N1 deve ser um número entre 0 e 10.");
} else {
  const n2 = lerNumero("Informe a nota da N2 (0 a 10):");

  if (n2 === null) {
    alert("Operação cancelada.");
  } else if (!notaValida(n2)) {
    alert("A N2 deve ser um número entre 0 e 10.");
  } else {
    const notaFinal = calcularNotaFinal(n1, n2);
    alert(
      `Nota final: ${notaFinal.toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}\nSituação: ${situacaoFinal(notaFinal)}`
    );
  }
}
