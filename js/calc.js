//Desafio 1
//Utilizando uma função com passagem de parâmetros insira os números e operadores matemáticos no visor.
//Você pode se utilizar de eventos inline no html.
//Boa sorte você tem 5 minutos.

function insereNumeroNoVisor(botao,visor) {
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/" ){

        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length-1)
        }else{
            visor.value += botao.value
        }
        
    }else{
        visor.value += botao.value
    }

}

//Desafio 2
//Utilizando a função eval(expressão) calcule o resultado do visor.
//Atrele o evento ao botão de IGUAL.
//Crie uma função para executar este procedimento.
//A função deve ser do tipo ARROW e deve receber um parâmetro!!!

//O FORMATO DA FUNÇÃO ARROW É:
// declarador identificador = ()=>{ }

const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}


// function fn1() {
//     console.log(this.id);
// }

// const fn2 = ()=> {
//     console.log(botaoResult.id);
// }

// const botaoResult = document.querySelector("#btnResultado");

// botaoResult.addEventListener("click", fn2);

//Desafio 3
//Impeça a entrada de mais de uma vez do operador matemático.

