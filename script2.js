

// variáveis:
let display = document.querySelector(".displayInput");
let button = document.querySelectorAll("button");
let numeroAtual = "";
let numeroAnterior = "";
let operador = null;
let flagResultadoMostrado = false;
let resultado = "";

// Percorrendo os elementos do array, aplicando evento de click em cada um que chama função:
for (let n=0; button[n]; n++ ) {
    button[n].addEventListener("click", calculando);
}
   

// callback:
function calculando(n) {

    // pega conteúdo escrito do botão clicado;
    let valor = n.target.textContent;
   
    // verificações:
    // se o botão clicado possui um desses números, execute o bloco;
    if ("0123456789".includes(valor)) {
        
        // se flagResultadoMostrado for true(já possuir um resultado no display), o valor é substituído pelo valor clicado;
        // depois volta a ser false, porque não terá mais resultado;
        if (flagResultadoMostrado === true) {
                numeroAtual = valor;
                display.value = numeroAtual;
                flagResultadoMostrado = false;

        //verificação para quando eu clicar em um valor numérico e não tiver um operador ou não tiver um ponto dentro do display, quer dizer que estou digitando um único valor com mais de uma casa decimal, logo serão concatenados, se não for essa condição, eu estou querendo digitar valores diferentes então o numeroAtual é substítuido por um novo valor;
        } else if (operador === null || ".".includes(display.value) != true) {
            numeroAtual += valor;

            // concatena com os valores que já estavam antes para não sumir do display;
            display.value += valor;  
        
        } else if (operador != null) {
            numeroAtual = valor;

            // concatena com os valores que já estavam antes para não sumir do display;
            display.value += valor;  

        } else if (numeroAtual != "")  {
            numeroAtual += valor;
            display.value += numeroAtual ;
        } 

    // se o botão clicado for +, -, * ou /, execute o bloco com verificações;
   } else if (valor === "+" || valor === "-" || valor === "*" || valor === "/" ) {

    // se tiver um resultado no display, pegue o valor do resultado e coloca na var numeroAnterior, o valor do operador na var operador, e mostre no display o operador;
    if (flagResultadoMostrado === true) {
        numeroAnterior = resultado;
        operador = valor;
        display.value += operador; 

        // se não for o caso, guarde o valor dentro da var operador, pegue o numero atual e guarde dentro da var numeroAnterior, mostre na tela o operador e deixe a var numeroAtual vazia para receber o próximo valor;   
    } else {
        operador = valor;
      
        numeroAnterior = numeroAtual;
        // deixa o atual vazio para receber o próximo
        display.value += operador; 
        numeroAtual = "";
        
    }

    // se o botão clicado for um ponto '.', verifique se ponto já está contido dentro da var numeroAtual, se sim não faça nada, senao se numeroAtual estiver vazio, mostre no display 0 concatenado com o ponto, senao, concatene o número atual com o ponto e mostre no display; 
    } else if (valor === ".") {

        let verificarPonto = numeroAtual.includes(valor);
    
        if (verificarPonto === true ) {
        
        } else if(numeroAtual === "") {
            display.value = `0${valor}${numeroAtual}`;
        } else { 
            console.log("valor normal")
            numeroAtual = numeroAtual+valor
            display.value = numeroAtual;
        }

    // se botão clicado for igual a '=', vverifique que tipo de operador foi guardado na var "operador" e calcule; 
    } else if (valor === "=") {
    
        if (operador === "+") {
        resultado = Number(numeroAnterior) + Number(numeroAtual);
        display.value = resultado;
        
    
        } else if (operador === "-") {
        resultado = Number(numeroAnterior) - Number(numeroAtual);
        display.value = resultado.toString();
        } else if (operador === "*") {
        resultado = Number(numeroAnterior) * Number(numeroAtual);
        display.value = resultado.toString();
        } else if (operador === "/") {
        resultado = Number(numeroAnterior) / Number(numeroAtual);
        display.value = resultado.toString();
        } 

    // se display receber o resultado, a var flagResultadoMostrado recebe true, pois agora o display está contendo um resultado;  
    if (display.value = resultado) {
        flagResultadoMostrado = true;
    } if (numeroAtual === "" || numeroAnterior === "") {
        // se apertar '=' e var numeroAtual ou numeroAnterior estiverem vazios, deixe o display vazio;  
        display.value = "";
    }

// se o botão clicado for 'A/C' limpe o display, a var numeroAtual, a var numeroAnterior e a var operador;
    } else if (valor === "A/C") {
        display.value = "";
        numeroAtual = "";
        numeroAnterior = "";
        operador = null;
    }
}