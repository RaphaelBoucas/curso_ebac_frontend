// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;



alunos = [
    {
        nome: 'Aluno 1',
        nota: 5
    },
    {
        nome: 'Aluno 2',
        nota: 6
    },
    {
        nome: 'Aluno 4',
        nota: 7
    },
    {
        nome: 'Aluno 5',
        nota: 4
    },
    {
        nome: 'Aluno 6',
        nota: 5
    },
    {
        nome: 'Aluno 7',
        nota: 9
    },
    {
        nome: 'Aluno 8',
        nota: 10
    },
    {
        nome: 'Aluno 9',
        nota: 6
    },
    {
        nome: 'Aluno 10',
        nota: 2
    } 
]

console.log(typeof(alunos))

const notasAzuis = alunos.forEach(element => {
    if (element.nota >= 6) {
        return console.log(`O ${element.nome} passou de ano, pois tirou ${element.nota}.`)
    }
});

const notasAzuisFilter = alunos.filter(item => item.nota >= 6)

console.log(notasAzuisFilter)
