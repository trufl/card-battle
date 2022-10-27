const Player = require('../js/player');
// const turnBased = require(`../js/turn`);
const GameStats = require('./gameClass');
const Card = require('../js/Card');
const cardsArray = require('../js/card-picker');

const cards = cardsArray.map((card) => new Card(card.id, card.name, 200, card.attack, card.defense));

const player = new Player(1, cards);
const ai = new Player(1, cards);
const gameStats = new GameStats(player, ai);

function turnBased () {
    const turn = gameStats.getTurn();

    if(turn) {
        gameStats.setTurn(false);
        attackCb();
    } else {
        gameStats.setTurn(true);
        aiAttack();
    }
};

function attackCb(){
    const enemyCard = 1
    //const playedCard = 2
    const strength = 50
    // const enemyCard = document.getElementById('playedCardSection').children[0];
    // const playedCard = document.getElementById('playedCardSection').children[1];
    // const strength = playedCard.getAttribute('data-strength');
    
    gameStats.player.attack(gameStats.ai, enemyCard, strength );
    turnBased();
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
    
    gameStats.ai.attack(gameStats.player, playedCard, strength );
    turnBased();
};

// const aiDefend = () => {
//     const aiCard = document.getElementById('playedCardSection').children[0];
//     const defense = aiCard.getAttribute('data-defense');

//     gameStats.player.defend(aiCard, defense);
//     turnBased();
// };

// function aiLastMove(){
//     if(gameStats.ai.checkLastMove()){
//         aiDefend();
//     }else{
//         aiAttack();
//     };
// };

while(gameStats.player.isAlive() && gameStats.ai.isAlive()){
    turnBased();
}