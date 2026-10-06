// Lista 01 — questão 2-a
// Converte reais em dólar. Execute no navegador por index.html.

function formatarMoeda(valor, moeda) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: moeda });
}

function converterRealParaDolar(valorReais, cotacaoDolar) {
  return valorReais / cotacaoDolar;
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

const valorReais = lerNumero("Informe o valor em R$:");

if (valorReais === null) {
  alert("Operação cancelada.");
} else if (!Number.isFinite(valorReais) || valorReais < 0) {
  alert("Informe um valor em reais maior ou igual a zero.");
} else {
  const cotacaoDolar = lerNumero("Quantos reais vale 1 dólar?");

  if (cotacaoDolar === null) {
    alert("Operação cancelada.");
  } else if (!Number.isFinite(cotacaoDolar) || cotacaoDolar <= 0) {
    alert("Informe uma cotação maior que zero.");
  } else {
    const valorDolar = converterRealParaDolar(valorReais, cotacaoDolar);
    alert(
      `${formatarMoeda(valorReais, "BRL")} equivalem a ${formatarMoeda(valorDolar, "USD")}.`
    );
  }
}
