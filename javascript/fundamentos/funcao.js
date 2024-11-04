// função sem retorno
function soma(a,b){
    console.log(a+b)
}

soma(3,2)
soma(2)
soma(3,2,4,5,6,7)

//função com retorno
function soma2(a,b=0){
    return a +b
}

console.log(soma2(2,3))
console.log(soma(2))
console.log()

// Armazenado função em uma variavel

const imprimirSoma = function(a,b) {
    console.log(a + b)   
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
const soma3 = (a,b) => {
    return a + b
}

console.log (soma3(2,3))

// retorno implicito
const subtração = (a,b) => a - b
console.log (subtração(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')


