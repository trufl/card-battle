class Player {
    constructor(health = 300, deckId, cards) {
        this.health = health;
        this.deckId = deckId;
        this.cards = cards;
    }

    attack(opp,card,hitpoints) {
        if(card.health > hitpoints) {
            card.health = card.health - hitpoints;
        } else {
            const newHit = hitpoints - card.health;
            card.health = 0;
            
            if(opp.health > newHit) {
                opp.health = opp.health - newHit;
            } else {
                opp.health = 0;
            }
        }
    }

    defend(card, defensePts) {
        card.health += defensePts;
    }

    isAlive() {
        if (this.health > 0) {
            return true;
        } else {
            return false;
        }
    }
}