const Player = require('../js/player');
// const turnBased = require(`../js/turn`);
const GameStats = require('./gameClass');
const Card = require('../js/Card');
const cardsArray = require('../js/card-picker');

const cards = cardsArray.map((card) => new Card(card.id, card.name, 200, card.attack, card.defense));

const player = new Player(1, cards);
const ai = new Player(1, cards);
const gameStats = new GameStats(player, ai);

// function turnBased () {
//     const turn = gameStats.getTurn();

//     if(turn) {
//         gameStats.setTurn(false);
//         console.log("Player attacking")
//         attackCb();
//     } else {
//         gameStats.setTurn(true);
//         console.log("ai attacking")
//         aiAttack();
//     }
// };

function turnBased () {
    const playerAlive = gameStats.player.isAlive();
    const aiAlive = gameStats.player.isAlive();

    if(playerAlive && aiAlive) {
        const turn = gameStats.getTurn();

        if(turn) {
            gameStats.setTurn(false);
            attackCb();
        } else {
            gameStats.setTurn(true);
            getAiChoice();
        }
    } else {
        process.end(0);
    }
}


function getAiChoice() {
    const isAlive = gameStats.ai.isAlive();

    if(isAlive) {
        const health = gameStats.ai.checkHealth();

        if(health > 100) {
            aiAttack();
        } else {
            const play = Math.floor(Math.random() * 2) + 1

            const lastAttack = gameStats.ai.checkLastMove();

            if(!lastAttack) {
                aiAttack();
            } else {
                
                if(play === 1){
                    aiAttack();
                } else if (play === 2){
                    aiDefend();
                } else {
                    console.log(`Error, play = ${play}`);
                }
            }
        }
    } else {
        process.end(0);
    }

}

var strength = 50
function attackCb(){
    const enemyCard = 1
    //const playedCard = 2
    // const enemyCard = document.getElementById('playedCardSection').children[0];
    // const playedCard = document.getElementById('playedCardSection').children[1];
    // const strength = playedCard.getAttribute('data-strength');
    
    gameStats.player.attack(gameStats.ai, strength );
    console.log(`player attacked ai has ${gameStats.ai.checkHealth()}`)
    if(gameStats.ai.isAlive()){
        turnBased();
    }else{
        console.log("player has died")
    }
};

// function defendCb(){
//     const playedCard = document.getElementById('playedCardSection').children[1];
//     const defense = playedCard.getAttribute('data-defense');

//     gameStats.player.defend(playedCard, defense);
//     turnBased();
// };

// function skipCb(){
//     turnBased();
// };



const aiAttack = () => {
    const aiCard = 2
    const playedCard = 1
    const strength = 50
    
    gameStats.ai.attack(gameStats.player, strength );
    console.log(`ai attacked player has ${gameStats.player.checkHealth()}`)
    if(gameStats.player.isAlive()){
        turnBased();
    }else{
        console.log("player has died")
    }
};

const aiDefend = () => {
    // const aiCard = document.getElementById('playedCardSection').children[0];
    // const defense = aiCard.getAttribute('data-defense');

    gameStats.ai.defend(100);
    console.log(`ai defended now has ${gameStats.ai.checkHealth()} hp`)
    turnBased();
};

// function aiLastMove(){
//     if(gameStats.ai.checkLastMove()){
//         aiDefend();
//     }else{
//         aiAttack();
//     };
// };
turnBased();
// while(gameStats.player.isAlive() && gameStats.ai.isAlive()){
//     turnBased();
// }
// while(player.isAlive() && ai.isAlive()){

//     player.attack(ai, strength );
//     consoisAlive())
//     ai.attack(player, strength );
//     console.log(player.checkHealth())
// }