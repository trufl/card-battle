class Player {
    constructor(deckId) {
        this.deckId = deckId;
        this.health = 1000;
        this.lastAttack = true;
    }

    attack(opp, hitpoints) {
        this.lastAttack = true;
        if(opp.health > hitpoints) {
            opp.health = opp.health - hitpoints;
        } else {
            opp.health = 0;
        }
    }

    defend(defensePts) {
        this.health += defensePts;
    }

    checkHealth() {
        return this.health;
    }

    setHealth(health) {
        this.health = health;
    }

    isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }

    checkLastMove() {
        if(this.lastAttack){
            return true;
        }else{
            return false;
        }
    }
}

class Enemy extends Player {

    constructor(enemyId, deckId, cards) {
        this.cards = cards;
        this.enemyId = enemyId;
        //Should eventualy hold last used card id
        this.lastCard = 0;

        super(deckId);
    }

    pickCard() {
        getCard(Math.floor(Math.random() * 6) + 1);
    }

    getCard(cardNum) {
        //depending on how the card data for the ai comes in
        //cardNum should be use to get the card from the object or array
        //and return the card object
        if(cardNum === this.getLastCard()) {
            this.pickCard();
        } else {
            //look through cards and find the card by id using cardNum

            //before returning set lastCard to the id of the card being used
        }
    }

    setLastCard(lastCardId) {
        this.lastCard = lastCardId;
    }

    getLastCard() {
        return this.lastCard
    }
}