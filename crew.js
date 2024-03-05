const paisesTratado = [
"África do Sul",
"Argentina",
"Áustria",
"Bélgica",
"Canadá",
"Chile",
"China",
"Coreia do Sul",
"Dinamarca",
"Emirados Árabes Unidos",
"Equador",
"Eslováquia",
"República Tcheca",
"Espanha",
"Filipinas",
"Finlândia",
"França",
"Hungria",
"Índia",
"Israel",
"Itália",
"Japão",
"Luxemburgo",
"México",
"Noruega",
"Países Baixos",
"Peru",
"Portugal",
"República Tcheca",
"Rússia",
"Singapura",
"Suécia",
"Suíça",
"Trinidad e Tobago",
"Turquia",
"Uruguai",
"Ucrânia",
"Venezuela"]


function Empregado (nome, paisOrigem, passaporte, visto, cpf, residenteFiscal, temTratado) {
    this.nome = nome;
    this.paisOrigem = paisOrigem;
    this.passaporte = passaporte;
    this.visto = visto;
    this.cpf = cpf;
    this.residenteFiscal = residenteFiscal;
    this.temTratado = temTratado;



    this.verificaTratado = function() {
        if(paisesTratado.includes(paisOrigem)) {
            this.temTratado = true;
        }else {
            this.temTratado = false;
        }
    }
}


function EmpregadoOffShore (nome, paisOrigem, passaporte, visto, cpf, residenteFiscal, temTratado, embarcacao, eTerceirizado ) {
    this.embarcacao = embarcacao;
    this.eTerceirizado = eTerceirizado;

    Empregado.call(this, nome, paisOrigem, passaporte, visto, cpf, residenteFiscal, temTratado);

}

function EmpregadoOnShore (nome, paisOrigem, passaporte, visto, cpf, residenteFiscal, temTratado, escritorio, eVip) {
    this.escritorio = escritorio;
    this.eVip = eVip;

    Empregado.call(this, nome, paisOrigem, passaporte, visto, cpf, residenteFiscal, temTratado);

}




const empregado1 = new Empregado("Mick", "África do Sul", "EB112233", "RN06", "100.100.100-10", false);
const empregado2 = new Empregado("Geofrey", "Estados Unidos", "EJ11113", "RN03", "101.101.101-10", true);
const empregado3 = new Empregado("Xin", "China", "BJ222233", "RN06", "102.102.102-10", false);
const empregado4 = new EmpregadoOnShore("Raphael", "Brazil", "AA222233", "RN06", "103.104.105-15", true, undefined, "Maersk Sinistrona", true);
const empregado5 = new EmpregadoOffShore("Pepe", "Uruguai", "CC222233", "RN06", "142.152.162-10", false, undefined, "Rio de Janeiro", true);


empregado1.verificaTratado();
empregado2.verificaTratado();
empregado3.verificaTratado();
empregado4.verificaTratado();
empregado5.verificaTratado();
console.log(empregado1);
console.log(empregado2);
console.log(empregado3);
console.log(empregado4);
console.log(empregado5);