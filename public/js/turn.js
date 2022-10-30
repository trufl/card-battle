const enemyAssemble = async () => {
    //TODO: can we handle picking the enemy in the back end before the game is rendered
    // getCards() should be a fetch call to an api endpoint that returns a preset deck
    //* const cards = await getCards();
    //* const enemyIdData = document.querySelector('#enemy-Img').getAttribute('data-enemy-id');
    // depending if the previous value returns as string 
    //* const enemyId = parseInt(enemyIdData);

    // cards.id will change depending on data returned from getCards()
    //* ai = new Enemy(enemyId, cards.id, cards);

    //* return ai;
}

function turnBased () {
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


function getAiChoice() {
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


function renderPlayedCard(e){
    const clickedCard = e.target.getAttribute('src');
    const clickedCardAttack = e.target.getAttribute('data-attack');
    const clickedCardDefense = e.target.getAttribute('data-defense');
    const playSection = document.getElementById('playerSelectedCard');
    const playedCard = document.createElement('img');
    
    playedCard.setAttribute('src', clickedCard);
    playedCard.setAttribute('data-attack', clickedCardAttack);
    playedCard.setAttribute('data-defense', clickedCardDefense);
    
    playSection.appendChild(playedCard);
    document.getElementById('buttonSection').style.display = 'block';
}

function getPlayerChoice(){
    document.getElementById('turnTitle').textContent = 'Your turn';
    document.getElementById('playerCards').addEventListener('dblclick', renderPlayedCard);
}