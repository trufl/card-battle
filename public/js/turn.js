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


function getAiChoice() {
    //const ready = document.getAttribute('data-ready');
}