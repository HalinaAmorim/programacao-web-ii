// Lista 01 — questão 3-a
// Operação escolhida por um caractere. Execute no navegador por index.html.

function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      return numero1 / numero2;
    default:
      return null;
  }
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

function formatarResultado(resultado) {
  return resultado.toLocaleString("pt-BR", { maximumFractionDigits: 4 });
}

const numero1 = lerNumero("Informe o primeiro número:");

if (numero1 === null) {
  alert("Operação cancelada.");
} else if (!Number.isFinite(numero1)) {
  alert("Informe um primeiro número válido.");
} else {
  const numero2 = lerNumero("Informe o segundo número:");

  if (numero2 === null) {
    alert("Operação cancelada.");
  } else if (!Number.isFinite(numero2)) {
    alert("Informe um segundo número válido.");
  } else {
    const textoOperacao = prompt("Informe a operação (+, -, * ou /):");

    if (textoOperacao === null) {
      alert("Operação cancelada.");
    } else {
      const operacao = textoOperacao.trim();

      if (operacao === "/" && numero2 === 0) {
        alert("Não é possível dividir por zero.");
      } else {
        const resultado = calcular(numero1, numero2, operacao);

        if (resultado === null) {
          alert("Operação inválida. Use +, -, * ou /.");
        } else {
          alert(`Resultado: ${formatarResultado(resultado)}`);
        }
      }
    }
  }
}
