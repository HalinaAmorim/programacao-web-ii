// Lista 01 — questão 2-b
// Calcula o perímetro de um círculo. Execute no navegador por index.html.

function calcularPerimetro(raio) {
  return 2 * Math.PI * raio;
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

const raio = lerNumero("Informe o raio do círculo:");

if (raio === null) {
  alert("Operação cancelada.");
} else if (!Number.isFinite(raio) || raio < 0) {
  alert("Informe um raio maior ou igual a zero.");
} else {
  const perimetro = calcularPerimetro(raio);
  alert(
    `Perímetro: ${perimetro.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
    })}`
  );
}
