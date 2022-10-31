class Player {
    constructor() {
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

    constructor(enemyId) {
        this.enemyId = enemyId;
    }

    pickCard() {
        return Math.floor(Math.random() * 5) + 1;
    }
}

module.exports = {
    Player,
    Enemy,
}