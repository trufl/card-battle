//const { Player, Enemy, GameStats} = require('./classes');
// const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');
let gameStats;

const init = async () => {
    const isNewGame = false //document.querySelector('#title').getAttribute('data-newGame');

    if(!isNewGame) {
        const player = new Player(0);
        const ai = enemyAssemble();
        gameStats = new GameStats(player, ai);
        //saveStartGame();
        turnBased();
    } else {
        gameStats = await getPrevGame();
        turnBased();
    }
}

const displayHealth = () => {
    const playerHealthDisplay = document.querySelector('#player-health-area');
    const aiHealthDisplay = document.querySelector('#enemy-health-area');
    const playerHealth = parseInt(gameStats.player.checkHealth());
    const aiHealth = parseInt(gameStats.ai.checkHealth());


    playerHealthDisplay.textContent = playerHealth;
    aiHealthDisplay.textContent = aiHealth;

    if(playerHealth < 700) {
        switch(playerHealth) {
            case playerHealth > 350:
                playerHealthDisplay.classList.remove('good-health');
                playerHealthDisplay.classList.add('mid-health');
                break;
            case playerHealth <= 350:
                playerHealthDisplay.classList.remove('mid-health');
                playerHealthDisplay.classList.add('low-health');
                break;
            default:
                break;
        }
    }

    if(aiHealth < 700) {
        switch(aiHealth) {
            case aiHealth > 350:
                aiHealthDisplay.classList.remove('good-health');
                aiHealthDisplay.classList.add('mid-health');
                break;
            case aiHealth <= 350:
                aiHealthDisplay.classList.add('mid-health');
                aiHealthDisplay.classList.add('low-health');
                break;
            default:
                break;
        }
    }
}

const getPrevGame = async () => {

    try{
    const prevGame = await fetch('/api/getgame').then((res) => {
        if(res.ok) {
            res.json()
            .then((data) => data)
        }
    });
    const { player_id, player_health, enemy_id, enemy_health }  = prevGame;

    const player = new Player();
    const ai = new Enemy(enemy_id);

    player.setHealth(player_health);
    ai.setHealth(enemy_health);

    const prevGameStats = new GameStats(player, ai)

    return prevGameStats;

    } catch(err) {
        console.error(err);
    }
}

const saveStartGame = async () => {
    await fetch('/api/savegame', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {
     player_health: gameStats.player.checkHealth(),
     enemy_id: gameStats.ai.getEnemyId(),
     enemy_health: gameStats.ai.checkHealth()
    }
    })
    .then((res) => {
     if(res.ok){
         console.log('game saved');
     }
    })
    .catch((err) => console.error(err));
}

const saveGame = async () => {
    fetch('/api/savegame', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: {
     player_health: gameStats.player.checkHealth(),
     enemy_health: gameStats.ai.checkHealth()
    }
    })
    .then((res) => {
     if(res.ok){
         console.log('game saved');
     }
    })
    .catch((err) => console.error(err));
}

const turnBased = async() => {
    displayHealth();

    const playerAlive = gameStats.player.isAlive();
    const aiAlive = gameStats.ai.isAlive();

    if(playerAlive && aiAlive) {
        const turn = gameStats.getTurn();

        if(turn) {
            gameStats.setTurn(false);
            getPlayerChoice();
            //await saveGame();
        } else {
            gameStats.setTurn(true);
            getAiChoice();
            //await saveGame();
        }
    } else if(playerAlive){
        playerVictory();
    } else if(aiAlive) {
        enemyVictory();
    }
}

const enemyAssemble = () => {
    //const enemyIdData = document.querySelector('#enemy-health-area').getAttribute('data-enemyid');
    //const enemyId = parseInt(enemyIdData);

    const ai = new Player(1);

    return ai;
}

const attackCb = async () => {
    const strength = document.getElementById('playedPlayerCard').getAttribute('data-attack');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');
    
    gameStats.player.attack(gameStats.ai, strength);

    document.getElementById('button-section').classList.add('hide-button');

    //await saveGame();
    turnBased();
}

const defendCb = async() => {
    const defense = document.getElementById('playedPlayerCard').getAttribute('data-defense');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');

    gameStats.player.defend(defense);

    document.getElementById('button-section').classList.add('hide-button');

    //await saveGame();
    turnBased();
}

const skipCb = () => {
    document.getElementById('button-section').classList.add('hide-button');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');
    
    turnBased();
}

const renderPlayedCard = (e) => {
    const clickedCard = e.target.getAttribute('src');
    const clickedCardAttack = e.target.getAttribute('data-strength');
    const clickedCardDefense = e.target.getAttribute('data-defense');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.remove('hide-card');
    
    playedCard.setAttribute('src', clickedCard);
    playedCard.setAttribute('data-strength', clickedCardAttack);
    playedCard.setAttribute('data-defense', clickedCardDefense);
    
    
    document.getElementById('button-section').classList.remove('hide-button');

    $attackButton.addEventListener('click', attackCb);
    $defendButton.addEventListener('click', defendCb);
    $skipButton.addEventListener('click', skipCb);
}

const getPlayerChoice = () => {
    if(gameStats.player.isAlive()){
        const playerCards = document.querySelectorAll('.player-card');

        playerCards.forEach((card) => card.addEventListener('click', renderPlayedCard));
    }
}

const aiAttack = (strength) => {
    gameStats.ai.attack(gameStats.player, strength);

    turnBased();
}

const aiDefend = (defense) => {
    gameStats.ai.defend(defense);

    turnBased();
}

const getAiChoice = () => {
    const isAlive = gameStats.ai.isAlive();

    if(isAlive) {
        const health = gameStats.ai.checkHealth();
        const enemyCards = document.querySelectorAll('.enemy-card');
        const playedEnemyCard = document.querySelector('#playedEnemyCard');
        const card = enemyCards[Math.floor(Math.random() * 5) + 0];
        const cardSrc = card.getAttribute('src');
        const cardStr = card.getAttribute('data-strength');
        const cardDef = card.getAttribute('data-defense');

        playedEnemyCard.setAttribute('src', cardSrc);

        if(health > 100) {
            aiAttack(cardStr);
        } else {

            const lastAttack = gameStats.ai.checkLastMove();

            if(!lastAttack) {
                aiAttack(cardStr);
            } else {
                const play = Math.floor(Math.random() * 2) + 1

                if(play === 1){
                    aiAttack(cardStr);
                } else if (play === 2){
                    aiDefend(cardDef);
                } else {
                    console.log(`Error, play = ${play}`);
                }
            }
        }
    }
}

const playerVictory = () => {
    window.location.replace('/victory');
}

const enemyVictory = () => {
    window.location.replace('/youlost');
}

init();