// • Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

// • No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.



function multiplicacao(num1: number, num2:number): number {
    return num1 * num2;
} 


console.log (multiplicacao(5, 10));

function dizOla(nome:string): string {
    return "Olá "+ nome;
}

console.log(dizOla('Raphael'));
