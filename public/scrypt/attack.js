const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');



function attackCb(){
    const enemyCard = document.getElementById('playedCardSection').children[0];
    const playedCard = document.getElementById('playedCardSection').children[1];
    const strength = playedCard.getAttribute('data-strength');
    
    GameStats.player.attack(GameStats.ai, enemyCard, strength );
    getTurn();
};

function defendCb(){
    const playedCard = document.getElementById('playedCardSection').children[1];
    const defense = playedCard.getAttribute('data-defense');

    GameStats.player.defend(playedCard, defense);
    getTurn();
};

function skipCb(){
    getTurn();
};



const aiAttack = () => {
    const aiCard = document.getElementById('playedCardSection').children[0];
    const playedCard = document.getElementById('playedCardSection').children[1];
    const strength = aiCard.getAttribute('data-strength');
    
    GameStats.ai.attack(GameStats.player, playedCard, strength );
    getTurn();
};

const aiDefend = () => {
    const aiCard = document.getElementById('playedCardSection').children[0];
    const defense = aiCard.getAttribute('data-defense');

    GameStats.player.defend(aiCard, defense);
    getTurn();
};

function aiLastMove(){
    if(GameStats.ai.checkLastMove()){
        aiDefend();
    }else{
        aiAttack();
    };
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