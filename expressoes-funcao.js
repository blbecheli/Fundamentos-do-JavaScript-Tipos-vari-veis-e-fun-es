//declaração de função

function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param")

//expressão de função
//Uma diferença é que a função não tem nome

//const soma = function(num1, num2){return num1 + num2}
console.log(soma(1,1));

//diferença principal: HOISTING
//funções e var são "listadas no topo", ou seja, o JS antes de iniciar o código e "passa para cima" as var e funções
console.log(apresentar());

function apresentar (){
    return "Olá"
}

console.log(soma());
const soma = function(num1, num2){return num1,num2}
