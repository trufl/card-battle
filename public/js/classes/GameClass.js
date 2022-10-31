class GameStats {
    constructor(player, ai){
        this.player = player;
        this.ai = ai;
        this.turn = true;
    }

    getTurn() {
        return this.turn;
    }

    setTurn(turn) {
        this.turn = turn;
    }
};

module.exports = GameStats;