class Player {
    constructor(deckId, cards, health = 300) {
        this.health = health;
        this.deckId = deckId;
        this.cards = cards;
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

module.exports = Player;