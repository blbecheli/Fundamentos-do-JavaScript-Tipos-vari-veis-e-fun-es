//parametros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2,2));
console.log(soma(245,-322));
console.log(soma("Bruno ","Lima"));

//parametros x argumentos

function nomeIdade(nome, idade){
    return`Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Bruno", 38));

function multiplica(numero1=1, numero2=1){ //numero1=1 é quando eu atribuo um valor padrão para o parametro, que será desconsiderado caso seja atribuido um outro valor
    return numero1*numero2
}

console.log(multiplica(soma(4,5), soma(3,3)));
console.log(multiplica(soma(4,5) ));