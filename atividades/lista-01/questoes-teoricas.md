# Lista 01 — Introdução ao JavaScript

**Disciplina:** Programação Web II  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Ceará — Campus Tauá  
**Aluna:** Halina Amorim  
**Professor:** Lucas Mendes

## Questão 1 — Tipagem de dados

### a) Tipagem estática

Uma linguagem de tipagem estática associa um tipo a cada variável, parâmetro e retorno, e esse tipo precisa ser conhecido antes da execução. O tipo pertence ao identificador: uma variável declarada como inteira permanece inteira, e o compilador recusa uma atribuição incompatível.

A verificação ocorre em tempo de compilação, em uma etapa de análise estática. O compilador percorre o código, confere se cada operação recebe valores compatíveis com os tipos declarados ou inferidos e interrompe a compilação quando encontra inconsistência. Um programa com erro de tipo não chega a ser executado.

### b) Benefícios da tipagem estática

Em performance, a verificação antecipada permite que o compilador escolha a representação dos dados e emita a operação correta já na compilação. Checagens que uma linguagem dinâmica repetiria a cada instrução podem ser feitas uma única vez, ou eliminadas. O código gerado tende a ser mais direto.

Em segurança, muitos usos indevidos de dados são apontados antes da execução. Isso reduz falhas em produção, deixa explícito o contrato de cada função e torna uma refatoração mais segura: uma alteração incompatível aparece no verificador de tipos, em vez de surgir somente quando aquele trecho roda.

### c) Tipagem dinâmica

Na tipagem dinâmica, o tipo está no valor, não na variável. A mesma variável pode guardar um número e, mais adiante, um texto ou um objeto. A linguagem só decide se uma operação é válida no momento em que ela executa: o interpretador observa os tipos daqueles valores e, se a operação não fizer sentido, interrompe o programa com um erro de execução.

O custo de performance vem dessa descoberta tardia. A cada operação, o ambiente pode precisar identificar os tipos, escolher a versão correta da operação e manter informação extra junto dos valores. Engines modernas, como a V8 do JavaScript, reduzem esse custo com compilação sob demanda e caches de tipo. Esses atalhos se desfazem quando uma mesma variável passa a receber valores de tipos diferentes: o trecho deixa o código otimizado e volta a um caminho mais lento.

### d) Tipagem forte e tipagem fraca

Tipagem forte e tipagem fraca não indicam quando o tipo é verificado. Elas indicam o que a linguagem faz quando os tipos de uma operação não combinam. Uma linguagem pode ser dinâmica e forte, como Python, ou dinâmica e fraca, como JavaScript.

Na tipagem forte, tipos incompatíveis não são convertidos por conta própria. Somar um texto e um número produz erro, a menos que o programa faça a conversão de forma explícita.

Na tipagem fraca, a linguagem aplica coerção e tenta converter os operandos para concluir a operação. Em JavaScript, `"5" + 1` produz `"51"`, porque `+` com texto concatena, e `"5" - 1` produz `4`, porque `-` converte o texto em número. O programa não falha, mas o resultado depende de regras de conversão que nem sempre são evidentes.
