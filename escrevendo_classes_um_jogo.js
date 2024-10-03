/**
 * Desafio de Projeto GFT Start #6 - Lógica de Programação: Escrevendo as Classes de Um Jogo
 * 
 * Utilizado: variáveis, operadores, laços de repetição, estruturas de decisões, funções, classes e objetos 
 * 
 */

// Classe Generica: Heroi
class Heroi{
    // Contrutor
    constructor(nome, idade, tipo){
        // Variáveis
        this.nome = nome;
        this.idade  = idade;
        this.tipo = tipo;
    }

    // Método: atacar
    atacar(){
        let ataque;
        // Tipo de ataque: atacque baseado no tipo do heroi
        switch(this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            
            case 'guerreiro':
                ataque = 'espada';
                break;
            
            case 'monge':
                ataque = 'artes marciais';
                break;
            
            case 'ninja':
                ataque = 'shuriken';
                break;

            default: // desconhecido
                ataque = 'ataque desconhecido';
                break;     

        }
        // Exibe a mensagem de ataque
        console.log(`O "${this.tipo}" atacou usando "${ataque}"`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Aragon', 40, 'guerreiro');
heroi1.atacar(); 

const heroi2 = new Heroi('Gandalf', 300, 'mago');
heroi2.atacar(); 

const heroi3 = new Heroi('Lee', 55, 'monge');
heroi3.atacar(); 

const heroi4 = new Heroi('Batman', 75, 'ninja');
heroi4.atacar(); 


