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
