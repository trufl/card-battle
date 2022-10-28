const enemyAssemble = async () => {
    
}

function turnBased () {
    const playerAlive = gameStats.player.isAlive();
    const aiAlive = gameStats.player.isAlive();

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