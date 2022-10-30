const { Player, Enemy, GameStats} = require('./classes');
const $playerCards = document.querySelectorAll('playerCards');
const $attackButton = document.getElementById('attackButton');
const $defendButton = document.getElementById('defenseButton');
const $skipButton = document.getElementById('skipButton');
let gameStats;

const init = async () => {
    //when we render the game page set data-newGame attribute in one of
    //the html elements to true if it is a new game and false if previous game exists.
    //In the back end we can set a session variable called newGame and set it to false when new game is
    //started and then false when the game is finished
    const isNewGame = document.querySelector('#title').getAttribute('data-newGame');

    if(isNewGame) {
        const deckId = document.querySelector('#player-img').getAttribute('data-deckId');
        const player = new Player(deckId);
        const ai = await enemyAssemble();
        gameStats = new GameStats(player, ai);
        turnBased();
    } else {
        gameStats = await getPrevGame();
        turnBased();
    }
}

const getCards = async (deckId) => {
    const cards = await fetch(`/api/game-play/enemy-cards/${deckId}`,{
        method: 'GET'
    }
    );

    return cards;
}

const saveGame = async () => {
    //TODO: refactor to work with backend
    /**
     * need to decide where to get userId from. Should link back to users
     * table or sessions table?
     * await fetch('/api/game-play/save-game/:userId' {
     * method: POST,
     * headers: [ "content-type": "application-json" ],
     * body: {
     *  playerHealth: gameStats.player.checkHealth(),
     *  playerDeckId: gameStats.player.getDeckId(),
     *  enemyId: gameStats.ai.getEnemyId(),
     *  enemyHealth: gameStats.ai.checkHealth(),
     *  enemyDeckId: gameStats.ai.getDeckId(),
     * }
     * })
     * .then((res) => {
     *  if(res.ok){
     *      console.log('game saved');
     *  }
     * })
     * .catch((err) => console.error(err));
     */
}

const turnBased = async() => {
    // await saveGame();
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
        playerVictory();
    } else if(aiAlive) {
        aiVictory();
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
    if(gameStats.player.isAlive()){
        document.getElementById('turnTitle').textContent = 'Your turn';
        document.getElementById('playerCards').addEventListener('dblclick', renderPlayedCard);
    }
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
    }
}

const playerVictory = () => {
    // TODO: Set up timer so the the user can see they won and maybe display some
    // TODO: some animation/modal/picture while timer is active then relocate user
    window.location.replace('/game-play/player-victory');
}

const enemyVictory = () => {

    // TODO: Set up timer so the the user can see they lost and maybe display some
    // TODO: some animation/modal/picture while timer is active then relocate user
    window.location.replace('/game-play/enemy-victory');
}