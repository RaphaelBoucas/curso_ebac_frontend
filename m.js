const carro = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruuum!")
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao ) {

    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vruuum!");
    }
}

const carroDoJoao2 = new Carro("Fista", "ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "ford", 2022, 2021);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

carroDaMaria2.acelerar()

const nome = "Gian";
const idade = 30;
const eMaior = true;
const conhecimentos = ["HTML", "CSS", "JavaScript"]

const pessoa = {
    nome: nome,
    idade: idade,
    eMaior: eMaior,
    conhecimentos: conhecimentos,
}

