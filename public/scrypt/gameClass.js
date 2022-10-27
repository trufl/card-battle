class gameStats {
    constructor(player, ai, turn = true){
        this.player = player;
        this.ai = ai;
        this.turn = turn;
    }

    getTurn() {
        return this.turn;
    }

    setTurn(turn) {
        this.turn = turn;
    }
};

