
# Calculadoras de IMC

Esse projeto de IMC em 3 versões acabei fazendo forma sem querer, tinha visto dentro de uma pasta e reunir aqui só para deixar registrado e detalhado se alguém quer fazer.


## 1. Calculadora de IMC em Python (`IMC.py`)

### Objetivo
Permitir que o usuário calcule seu Índice de Massa Corporal (IMC) diretamente pelo terminal, recebendo também uma classificação de acordo com o resultado.

### Funcionamento
O script solicita ao usuário seu nome, idade, peso (em kg) e altura (em metros). Após coletar os dados, calcula o IMC usando a fórmula padrão e exibe o valor calculado. Em seguida, classifica o resultado em faixas (magreza, saudável, sobrepeso, obesidade, etc) e mostra uma mensagem personalizada com recomendações.

### Arquivo principal
- `IMC.py`: Contém todo o código, desde a entrada de dados até a classificação.

### Principais funções e blocos
- `input()`: Coleta informações do usuário.
- `print()`: Exibe mensagens e resultados.
- `if/elif/else`: Estrutura condicional para classificar o IMC.

### Exemplo de uso
```
Bem vindo a Calculadora de IMC
Qual é o seu nome? Maria
Qual sua idade? 30
Qual seu peso (em KG)? 70
Qual sua Altura (em metros e usando ponto)? 1.70
Vamos calcular seu IMC
Maria seu IMC é: 24.22
Você está Saudável.
Parabéns!
```

### Sugestões de uso e expansão
- Pode ser usado em aulas de programação, matemática ou saúde.
- Pode ser expandido para aceitar múltiplos cálculos, salvar resultados em arquivo ou adicionar interface gráfica.

---

---


## 2. Calculadora de IMC Web (`imc.html` e `IMC.js`)

### Objetivo
Oferecer uma calculadora de IMC interativa, acessível pelo navegador, com interface amigável e visual moderno.

### Funcionamento
O usuário informa peso e altura em campos próprios na página. Ao clicar em "Calcular IMC", o JavaScript lê os valores, valida se são positivos e calcula o IMC. O resultado aparece na tela. O botão "Alternar Tema" permite mudar entre modo claro e escuro, tornando a experiência mais agradável.

### Arquivos principais
- `imc.html`: Estrutura da interface, campos de entrada, botões e área de resultado.
- `IMC.js`: Função de cálculo do IMC e exemplo de uso no console.

### Funções e scripts
- `toggleTheme()`: Alterna entre modo claro e escuro.
- Evento do botão Calcular: Lê os valores, valida e calcula o IMC. Exibe o resultado ou mensagem de erro.
- `calcularIMC(peso, altura)`: Função JS que faz o cálculo matemático e retorna o IMC.

### Fluxo de funcionamento
1. Usuário informa peso e altura.
2. Ao clicar em "Calcular IMC", o script lê os valores, valida e chama a função de cálculo.
3. O resultado é exibido na tela.
4. O botão "Alternar Tema" permite mudar entre modo claro e escuro.

### Sugestões de uso e expansão
- Pode ser usada em sites de saúde, academias ou escolas.
- Pode ser expandida para mostrar a classificação do IMC, histórico de cálculos ou gráficos.
- O código JS pode ser separado em arquivo externo para melhor organização.

---

---


## 3. Sistema de Restaurante com IMC (Python)

### Objetivo
Simular um sistema de restaurante em Python, com possibilidade de expansão para incluir cálculo de IMC de clientes.

### Funcionamento
O projeto principal gerencia restaurantes, pratos e bebidas, permitindo cadastro e exibição de cardápio. Para integrar o cálculo de IMC, basta criar uma função ou classe que receba os dados do cliente e utilize a lógica das calculadoras anteriores.

### Arquivos principais
- `app.py`: Ponto de entrada do sistema de restaurante.
- Demais arquivos em `modelo/` para estrutura de dados.

### Sugestão de integração
- Criar uma função ou classe para calcular IMC de clientes cadastrados.
- Exibir o resultado junto com os dados do cliente no sistema.
- Permitir avaliações de saúde junto com avaliações do restaurante.

### Sugestões de uso e expansão
- Ideal para estudos de programação orientada a objetos.
- Pode ser expandido para um sistema completo de gestão de restaurantes com funcionalidades de saúde.

---

---
