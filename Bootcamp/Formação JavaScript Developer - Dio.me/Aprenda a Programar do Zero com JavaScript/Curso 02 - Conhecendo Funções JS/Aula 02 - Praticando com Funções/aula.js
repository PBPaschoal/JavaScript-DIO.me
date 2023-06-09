function escrevaMeuNome() {
    const nome = 'Paulo';
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome();

// Ou

function escrevaMeuNome2(nome2) {
    console.log('Meu nome é ' + nome2);
}

escrevaMeuNome2('Paulo');
escrevaMeuNome2('Bruno');

// Maior de idade

const idade = 31;

function SouMaiorDeIdade(idade) {
    
    if (idade >= 18) {
        console.log('Eu tenho ' + idade + ' anos e sou maior de idade!');
    } else {
        console.log('Eu tenho ' + idade + ' anos e não sou maior de idade.');
    }
}

SouMaiorDeIdade(idade);

// OU

function SouMaiorDeIdade2(idade2) {
    
    if (idade2 >= 18) {
        console.log('Eu tenho ' + idade2 + ' anos e sou maior de idade!');
    } else {
        console.log('Eu tenho ' + idade2 + ' anos e não sou maior de idade.');
    }
}

SouMaiorDeIdade2(31);

// Juntando:

function escrevaMeuNome3(nome3) {
    return 'Meu nome é ' + nome3;
}

function SouMaiorDeIdade3(idade3) {
    if (idade3 >= 18) {
        console.log(escrevaMeuNome3('Paulo') + ' e sou Maior de idade.');
    } else {
        console.log('sou Menor');
    }
}

SouMaiorDeIdade3(31);