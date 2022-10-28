const GameStats = require('../scrypt/gameClass');

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
    } else {
        endGame();
    }
}


function getAiChoice() {
    const isAlive = gameStats.ai.isAlive();

    if(isAlive) {
        const health = gameStats.ai.checkHealth();

        if(health > 100) {
            attackCb();
        } else {
            const play = Math.floor(Math.random * 3) + 1

            const lastAttack = gameStats.ai.checkLastMove();

            if(!lastAttack) {
                attackCb();
            } else {
                
                if(play === 1){
                    attackCb();
                } else if (play === 2){
                    defendeCb();
                } else {
                    console.log(`Error, play = ${play}`);
                }
            }
        }
    } else {
        process.end(0);
    }

}
