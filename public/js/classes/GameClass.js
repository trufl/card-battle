class GameStats {
    constructor(player, ai){
        this.player = player;
        this.ai = ai;
        this.turn = true;
    }

    getPlayer() {
        return this.player;
    }

    getAi() {
        return this.ai;
    }

    getTurn() {
        return this.turn;
    }

    setTurn(turn) {
        this.turn = turn;
    }
};