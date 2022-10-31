class Card {
    constructor(id, name, health, attack, defense) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    getId() {
        return this.id;
    }

    getHealth() {
        return this.health;
    }

    getAttack() {
        return this.attack;
    }

    getDefense() {
        return this.defense;
    }
}