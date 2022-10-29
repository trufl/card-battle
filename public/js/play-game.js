const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');

const init = async () => {
}

const turnBased = () => {
    const playerAlive = gameStats.player.isAlive();
    const aiAlive = gameStats.ai.isAlive();

    if(playerAlive && aiAlive) {
        const turn = gameStats.getTurn();

        if(turn) {
            gameStats.setTurn(false);
            getPlayerChoice();
        } else {
            gameStats.setTurn(true);
            getAiChoice();
        }
    } else if(playerAlive){
        endGame(gameStats.player);
    } else if(aiAlive) {
        endGame(gameStats.ai);
    }
}

const enemyAssemble = async () => {
    //TODO: can we handle picking the enemy in the back end before the game is rendered
    // getCards() should be a fetch call to an api endpoint that returns a preset deck
    //* const deckId = document.querySelector('#enem-img').getAttribute('data-enemy-deckId');
    //* const cards = await getCards(parseInt(deckId));
    //* const enemyIdData = document.querySelector('#enemy-Img').getAttribute('data-enemy-id');
    // depending if the previous value returns as string 
    //* const enemyId = parseInt(enemyIdData);

    //* const ai = new Enemy(enemyId, deckId, cards);

    //* return ai;
}

const attackCb = () => {
    const strength = document.getElementById('playerSelectedCard').children[0].getAttribute('data-attack');
    
    gameStats.player.attack(gameStats.ai, strength );

    document.getElementById('buttonSection').style.display = 'none';

    turnBased();
}

const defendCb = () => {
    const defense = document.getElementById('playerSelectedCard').children[0].getAttribute('data-defense');

    gameStats.player.defend(defense);

    document.getElementById('buttonSection').style.display = 'none';

    turnBased();
}

const skipCb = () => {
    document.getElementById('buttonSection').style.display = 'none';
    
    turnBased();
}

const renderPlayedCard = (e) => {
    const clickedCard = e.target.getAttribute('src');
    const clickedCardAttack = e.target.getAttribute('data-attack');
    const clickedCardDefense = e.target.getAttribute('data-defense');
    const playSection = document.getElementById('playedCardSection');
    const playedCard = document.createElement('img');
    
    playedCard.setAttribute('src', clickedCard);
    playedCard.setAttribute('data-attack', clickedCardAttack);
    playedCard.setAttribute('data-defense', clickedCardDefense);
    
    playSection.appendChild(playedCard);
    document.getElementById('buttonSection').style.display = 'block';

    $attackButton.addEventListener('click', attackCb);
    $defendButton.addEventListener('click', defendCb);
    $skipButton.addEventListener('click', skipCb);
}

const getPlayerChoice = () => {
    document.getElementById('turnTitle').textContent = 'Your turn';
    document.getElementById('playerCards').addEventListener('dblclick', renderPlayedCard);
}

const aiAttack = () => {
    const aiCard = document.getElementById('enemy-card');
    const strength = aiCard.getAttribute('data-strength');
    
    gameStats.ai.attack(gameStats.player, strength);
    document.getElementById('buttonSection').style.display = 'block';
    turnBased();
}

const aiDefend = () => {
    const aiCard = document.getElementById('enemy-card');
    const defense = aiCard.getAttribute('data-defense');

    gameStats.ai.defend(defense);
    document.getElementById('buttonSection').style.display = 'block';
    turnBased();
}

const getAiChoice = () => {
    const isAlive = gameStats.ai.isAlive();

    if(isAlive) {
        const card = gameStats.ai.pickCard();
        const health = gameStats.ai.checkHealth();

        if(health > 100) {
            aiAttack();
        } else {

            const lastAttack = gameStats.ai.checkLastMove();

            if(!lastAttack) {
                aiAttack();
            } else {
                const play = Math.floor(Math.random() * 2) + 1

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
        endGame();
    }

}