const GameStats = require('../scrypt/gameClass');

function turnBased () {
    const turn = GameStats.getTurn();

    if(turn) {
        GameStats.setTurn(false);
        getPlayerChoice();
    } else {
        GameStats.setTurn(true);
        getAiChoice();
    }
}

module.exports = turnBased;