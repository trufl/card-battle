const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');



function attackCb(){
    const strength = document.getElementById('playerSelectedCard').children[0].getAttribute('data-attack');
    
    gameStats.player.attack(gameStats.ai, strength );

    document.getElementById('buttonSection').style.display = 'none';

    turnBased();
};

function defendCb(){
    const defense = document.getElementById('playerSelectedCard').children[0].getAttribute('data-defense');

    gameStats.player.defend(defense);

    document.getElementById('buttonSection').style.display = 'none';

    turnBased();
};

function skipCb(){
    document.getElementById('buttonSection').style.display = 'none';
    
    turnBased();
};



const aiAttack = () => {
    const aiCard = document.getElementById('playedCardSection').children[0];
    const playedCard = document.getElementById('playedCardSection').children[1];
    const strength = aiCard.getAttribute('data-strength');
    
    gameStats.ai.attack(gameStats.player, playedCard, strength );
    document.getElementById('buttonSection').style.display = 'block';
    turnBased();
};

const aiDefend = () => {
    const aiCard = document.getElementById('playedCardSection').children[0];
    const defense = aiCard.getAttribute('data-defense');

    gameStats.player.defend(aiCard, defense);
    document.getElementById('buttonSection').style.display = 'block';
    turnBased();
};

// function aiLastMove(){
//     if(GameStats.ai.checkLastMove()){
//         aiDefend();
//     }else{
//         aiAttack();
//     };
//     document.getElementById('buttonSection').style.display = 'block';
// };

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