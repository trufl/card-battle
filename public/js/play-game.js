const { Player, Enemy, GameStats} = require('./classes');
// const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');
let gameStats;

const init = async () => {
    const isNewGame = document.querySelector('#title').getAttribute('data-newGame');

    if(isNewGame) {
        const player = new Player();
        const ai = enemyAssemble();
        gameStats = new GameStats(player, ai);
        saveStartGame();
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
            await saveGame();
        } else {
            gameStats.setTurn(true);
            getAiChoice();
            await saveGame();
        }
    } else if(playerAlive){
        playerVictory();
    } else if(aiAlive) {
        enemyVictory();
    }
}

const enemyAssemble = () => {
    const enemyIdData = document.querySelector('#enemy-Img').getAttribute('data-enemy-id');
    const enemyId = parseInt(enemyIdData);

    const ai = new Enemy(enemyId);

    return ai;
}

const attackCb = async () => {
    const strength = document.getElementById('played-card').getAttribute('data-attack');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');
    
    gameStats.player.attack(gameStats.ai, strength );

    document.getElementById('buttonSection').style.display = 'none';

    await saveGame();
    turnBased();
}

const defendCb = async() => {
    const defense = document.getElementById('played-card').getAttribute('data-defense');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');

    gameStats.player.defend(defense);

    document.getElementById('buttonSection').style.display = 'none';

    await saveGame();
    turnBased();
}

const skipCb = () => {
    document.getElementById('buttonSection').style.display = 'none';
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.add('hide-card');
    
    turnBased();
}

const renderPlayedCard = (e) => {
    const clickedCard = e.target.getAttribute('src');
    const clickedCardAttack = e.target.getAttribute('data-attack');
    const clickedCardDefense = e.target.getAttribute('data-defense');
    const playedCard = document.getElementById('playedPlayerCard');

    playedCard.classList.remove('hide-card');
    
    playedCard.setAttribute('src', clickedCard);
    playedCard.setAttribute('data-attack', clickedCardAttack);
    playedCard.setAttribute('data-defense', clickedCardDefense);
    
    
    document.getElementById('buttonSection').style.display = 'block';

    $attackButton.addEventListener('click', attackCb);
    $defendButton.addEventListener('click', defendCb);
    $skipButton.addEventListener('click', skipCb);
}

const getPlayerChoice = () => {
    if(gameStats.player.isAlive()){
        document.getElementById('turnTitle').textContent = 'Your turn';
        document.getElementById('playerCards').addEventListener('click', renderPlayedCard);
    }
}

const aiAttack = (strength) => {
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
        const cardId = gameStats.ai.pickCard();
        const health = gameStats.ai.checkHealth();
        const enemyCards = document.querySelectorAll('enemy-card');
        let cardSrc;
        let cardStr;
        let cardDef;

        enemyCards.forEach((card) => {
            if(card) {
                
            }
        });

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
    }
}

const playerVictory = () => {
    window.location.replace('/game-play/player-victory');
}

const enemyVictory = () => {
    window.location.replace('/game-play/enemy-victory');
}