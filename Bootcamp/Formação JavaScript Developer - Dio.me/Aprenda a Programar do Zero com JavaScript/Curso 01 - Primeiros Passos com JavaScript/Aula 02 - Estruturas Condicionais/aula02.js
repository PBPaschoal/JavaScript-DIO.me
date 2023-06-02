// Estruturas Condicionais
// Exemplo: Pessoa 1 usa a camisa azul e pessoa 2 usa a camisa vermelha
const camisetaP1Azul = true;
const camisetaP2Azul = false;

console.log(camisetaP1Azul);
console.log(camisetaP2Azul);

const number = 29;
const result = number % 2;

if (result === 0) { // O operador === ele não faz comparação de uma variavel número comparado com string, sempre será false. Exemplo: numero % 2 === '0'; FALSE. 
    console.log('Number ' + number + ' is even!');
} else {
    console.log('Number ' + number + ' is odd!');
}

// ou

const numero = 3;

const numeroPar = (numero % 2) === 0;
console.log('Number ' + numero + ' is ' + numeroPar);

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}

19:38 minutos de aula, terminar amanhã