// Par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exex() {
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exex())
console.log(cliente)