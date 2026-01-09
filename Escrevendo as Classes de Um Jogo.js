// INICIO

// Criando a classe Hero

class Hero{
    constructor (nome, idade, tipo){
        this.nomeDoHeroi = nome
        this.idadeDoHeroi = idade
        this.tipoDoHeroi = tipo
    }

    // Método ataque
    atacar() {
       
        let ataque = "";
        
        switch (this.tipoDoHeroi) {
    case "Mago":
        ataque = "Usou Magia"
        break;
    case "Guerreiro":
        ataque = "Usou uma Espada"
        break;
    case "Monge":
        ataque = "Usou Artes Marciais"
        break;
    case "Ninja":
        ataque = "Lançou algumas Shurikens"
        break;
    default:
       ataque = "Deu um chute"
}

// Saida Solicitada

console.log(`O ${this.tipoDoHeroi}, chamado ${this.nomeDoHeroi}, ${ataque}`)
    }
}

// Entrada de dados do Hero

let heroUsuario = "Fofinho" ;
let idadeHeroUsuario = "22" ;
let tipoHeroUsuario = "Mago" ;

let meuHeroi = new Hero(heroUsuario, idadeHeroUsuario, tipoHeroUsuario);

meuHeroi.atacar();

// Laço de repetição

const prompt = require('prompt-sync')(); // Preparando a entrada de dados

let continuar = true;

while (continuar) {
    
    let nome = prompt("Digite o nome do herói: ");
    let idade = prompt("Digite a idade: ");
    let tipo = prompt("Digite o tipo (Mago, Guerreiro, Monge, Ninja, etc. ): ");

    let meuHeroi = new Hero(nome, idade, tipo);
    meuHeroi.atacar();

    let resposta = prompt("Deseja criar outro herói? (s/n): ");
    if (resposta.toLowerCase() !== 's') {
        continuar = false;
        console.log("Encerrando programa...");
    }
}

// FIM