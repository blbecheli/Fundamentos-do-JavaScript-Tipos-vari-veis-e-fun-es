//padrão

function apresentar (nome){
    return `Meu nome é ${nome}`;
}

//arrow function
const apresentarArrow =nome =>`Meu nome é ${nome}` //Ela inicia com uma const, após isso (=) eu coloco os parametros e depois da arrow (=>) eu escrevo a função. Caso somente tenha um parametro eu não preciso por parenteses e caso a só tenha uma linha, não preciso por chaves
const soma = (num1, num2) => num1+num2

//Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2)=>{
    if( num1>10 || num2 >10) {
        return "Somentes números de 1 a 9"
    }else{
        return num1+num2;
    }
}

console.log(somaNumerosPequenos(5,9));