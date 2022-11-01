class Player {
    constructor(id) {
        this.health = 1000;
        this.lastAttack = true;
        this.enemyId = id;
    }

    attack(opp, hitpoints) {
        this.lastAttack = true;
        if(opp.checkHealth() > hitpoints) {
            opp.health = opp.health - hitpoints;
        } else {
            opp.health = 0;
        }
    }

    defend(defensePts) {
        this.lastAttack = false;
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

    getEnemyId() {
        return this.enemyId;
    }
}
