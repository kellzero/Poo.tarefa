function Atleta(atleta){
    this.atleta = atleta;
}

function Genero(atleta, genero){
    this.genero = genero;

    Atleta.call(this, atleta);
}

function Dados(atleta, genero, esporte, modalidade, idade){
    this.esporte = esporte;
    this.modalidade = modalidade;
    this.idade = idade;
    
    Genero.call(this, atleta, genero);
}

const pessoa1 = new Atleta("pedro");
const genero1 = new Genero("pedro", "masculino");
const atleta1 = new Dados("pedro", "masculino", "volley", "areia", 22);


console.log(pessoa1);
console.log(genero1);
console.log(atleta1);