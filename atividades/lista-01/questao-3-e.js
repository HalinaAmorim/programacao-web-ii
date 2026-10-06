// Lista 01 — questão 3-e
// Total do carrinho com desconto opcional em reais. Execute no navegador por index.html.
// Sem o terceiro argumento, o desconto é 0.

function calcularTotal(valorUnitario, quantidade, desconto = 0) {
  const subtotal = valorUnitario * quantidade;
  const total = subtotal - desconto;
  return total < 0 ? 0 : total;
}

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

const valorUnitario = lerNumero("Informe o valor unitário do produto:");

if (valorUnitario === null) {
  alert("Operação cancelada.");
} else if (!Number.isFinite(valorUnitario) || valorUnitario < 0) {
  alert("Informe um valor unitário maior ou igual a zero.");
} else {
  const quantidade = lerNumero("Informe a quantidade:");

  if (quantidade === null) {
    alert("Operação cancelada.");
  } else if (!Number.isInteger(quantidade) || quantidade <= 0) {
    alert("Informe uma quantidade inteira maior que zero.");
  } else {
    const textoDesconto = prompt(
      "Informe o desconto em R$. Deixe em branco para não aplicar desconto."
    );

    if (textoDesconto === null) {
      alert("Operação cancelada.");
    } else if (textoDesconto.trim() === "") {
      alert(`Total da compra: ${formatarReais(calcularTotal(valorUnitario, quantidade))}`);
    } else {
      const desconto = Number(textoDesconto.trim().replace(",", "."));

      if (!Number.isFinite(desconto) || desconto < 0) {
        alert("Informe um desconto maior ou igual a zero.");
      } else {
        alert(
          `Total da compra: ${formatarReais(
            calcularTotal(valorUnitario, quantidade, desconto)
          )}`
        );
      }
    }
  }
}
