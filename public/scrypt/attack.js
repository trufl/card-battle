const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');



function attackCb(){
    const enemyCard = document.getElementById('playedCardSection').children[0];
    const playedCard = document.getElementById('playedCardSection').children[1];
    const strength = playedCard.getAttribute('data-strength');
    
    gameStats.player.attack(gameStats.ai, enemyCard, strength );
    
};

function defendCb(){
    const playedCard = document.getElementById('playedCardSection').children[1];
    const defense = playedCard.getAttribute('data-defense');

    gameStats.player.defend(playedCard, defense);

};

function skipCb(){

};

$attackButton.addEventListener('click', attackCb);
$defendButton.addEventListener('click', defendCb);
$skipButton.addEventListener('click', skipCb);

// gameStats = {
//     player:{
//         health: 300,
//         card1: {
//             hp: 100,
//             strength: 20
//         },
//         card2: {},
//         card3: {},
//         card4: {},
//         card5: {}
//     },
//     ai: {
//         health: 300,
//         deckId: 1,
//         cards:{
//             card1: {
//                 hp: 100,
//                 strength: 20
//             }
//         }
//     }
// }