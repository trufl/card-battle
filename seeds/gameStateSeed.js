const { Gamestate } = require('../models');

const createGameState = async () => {
    await Gamestate.create({
        playerId: 1,
        playerHealth: 100,
        enemyId: 2,
        enemyHealth: 50
    });
};
module.exports = createGameState;