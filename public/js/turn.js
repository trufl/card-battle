function turnBased () {
    const turn = gameStats.getTurn();

    if(turn) {
        gameStats.setTurn(false);
        getPlayerChoice();
    } else {
        gameStats.setTurn(true);
        getAiChoice();
    }
}