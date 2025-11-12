<h1 align="center"> Calculadora </h1>
<h1 align="center"> <a href="https://hellenpaula.github.io/calculadora-com-javascript/" target="_blank">📍Veja o projeto aqui! </a></h1> 

## 📷 Preview do projeto:

## 📌 Sobre:
Este é um projeto de calculadora funcional e interativa, desenvolvida com HTML, CSS e JavaScript puro, criada com o objetivo de praticar lógica de programação, manipulação do DOM, controle de fluxo e design responsivo.

O projeto evoluiu para incluir uma alternância entre temas claros e escuros, aprimorando a experiência visual e o entendimento sobre o uso de variáveis CSS dinâmicas e manipulação de classes via JavaScript.

Durante o processo, o foco esteve em compreender como estruturar o raciocínio lógico de uma calculadora real, garantindo assim um entendimento sólido sobre como valores, operadores e resultados interagem entre si.

## 🧩 Funcionalidades:
- **Operações básicas:** adição, subtração, multiplicação e divisão.

- **Suporte a números decimais.**

- **Botão A/C** para limpar o display e reiniciar o cálculo.

- **Exibição dinâmica** dos valores digitados.

- **Bloqueio** para evitar múltiplos pontos decimais em um mesmo número.

- **Tema claro e escuro**, com ícone dinâmico.

- **Layout responsivo**, ajustando-se a diferentes tamanhos de tela.

## 💻 Tecnologias utilizadas:
-  [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) – Estrutura semântica da aplicação.

- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – Estilização e organização visual dos elementos.

- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Implementação da lógica de cálculo e manipulação do DOM.

-[Font Awesome](https://fontawesome.com/) - Ícones utilizados para indicar o estado do tema(sol/lua).

## ⚙️ Fluxo lógico da calculadora:
O funcionamento da calculadora foi estruturado com base em três estados principais e controle de eventos em cada botão.
Abaixo está o fluxo simplificado de como o código opera:

### 1️⃣  Captura de eventos: 
Todos os botões **(button)** são percorridos com **(for)** e recebem um listener de clique que chama a função **calculando()**. </br>
Essa função identifica o tipo de botão clicado (número, operador, ponto, igual ou limpar). </br>

```js
for (let n = 0; button[n]; n++) {
    button[n].addEventListener("click", calculando);
}
```

### 2️⃣ Entrada de números:
Quando um número é clicado:

- Se o display contém um resultado anterior **(flagResultadoMostrado === true)**, ele é substituído pelo novo número digitado.

- Caso contrário, o número é concatenado ao valor atual **(numeroAtual)**, permitindo múltiplos dígitos.

Esse controle garante que o usuário possa montar números com várias casas, inclusive decimais.

### 3️⃣ Seleção de operadores:
Ao clicar em um operador **(+, -, *, /)**:

- O valor atual **(numeroAtual)** é guardado em **(numeroAnterior)**.

- O operador clicado é armazenado na variável **operador**.

- O display é atualizado para mostrar o símbolo do operador.

- A variável **(numeroAtual)** é esvaziada, aguardando o próximo número.

### 4️⃣ Tratamentos de ponto decimal:
A calculadora verifica se o número atual já contém um ponto **(.)** antes de permitir outro.
Isso impede que o usuário insira múltiplos pontos no mesmo número, evitando erros de cálculo.

```js
if (numeroAtual.includes(".")) {
   // ignora clique
}
```
### 5️⃣ Cálculo do resultado:
Quando o botão **(=)** é clicado:

- O código verifica qual operador foi usado.

- Converte **(numeroAnterior)** e **(numeroAtual)** para *Number()* e executa a operação correspondente.

- O resultado é exibido no display e armazenado em **(resultado)**.

- A flag **(flagResultadoMostrado)** é ativada, indicando que o display agora contém um resultado (permitindo iniciar novo cálculo a partir dele).

### 6️⃣ Limpeza do display:
Ao clicar em A/C, todas as variáveis principais (**numeroAtual**, **numeroAnterior**, **operador**) são resetadas, e o display volta a ficar vazio, pronto para um novo cálculo.

## 🧠 Aprendizados:
Durante o desenvolvimento deste projeto, foram reforçados os seguintes conceitos:

- Estruturação e controle de fluxos condicionais (if, else if, else).

- Manipulação de eventos e estados com variáveis de controle.

- Manipulação do DOM para atualizar dinamicamente o display.

- Validação de entradas e tratamento de exceções lógicas (como múltiplos pontos decimais ou cliques repetidos).

- Separação de responsabilidades entre interface (HTML/CSS) e lógica (JavaScript).

- Aplicação de variáveis CSS e dark mode de forma dinâmica.

- Implementação de responsividade e uso de media queries para diferentes telas e orientações.

## 🚀 Melhorias futuras:
- Permitir entrada de valores diretamente pelo teclado (eventos keydown).

- Adicionar histórico de cálculos.

- Melhorar o tratamento de erros (ex: divisão por zero).

- Incluir botões para operações mais avançadas (raiz quadrada, potência, etc...).