class Player {
    constructor( deckId, cards, health = 300) {
        this.deckId = deckId;
        this.cards = cards;
        this.health = health;
    }

    attack(opp,card,hitpoints) {
        this.lastAttack = true;
        if(card.health > hitpoints) {
            card.health = card.health - hitpoints;
        } else {
            const newHit = hitpoints - card.health;
            card.health = card.health - card.health;
            
            if(opp.health > newHit) {
                opp.health = opp.health - newHit;
            } else {
                opp.health = 0;
            }
        }
    }

    defend(card, defensePts) {
        this.lastAttack = false;
        card.health += defensePts;
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