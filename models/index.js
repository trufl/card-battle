const Scores = require("./Scores");
const Deck = require("./Deck");
const User = require("./Users");
const Card = require("./cards");
const Enemy = require('./Enemy');
const EnemyDeck = require('./EnemyDeck');
const Gamestate = require('./Gamestate');
const EnemyDeck_Card = require('./enemyDeckCard');
const Deck_Card = require('./deckCard');
const sequelize = require("../config/connection");


User.hasMany(Scores, {
    foreignKey: "user_id"
});
Scores.belongsTo(User, {
    foreignKey: "user_id"
});

User.hasMany(Deck, {
    foreignKey: "user_id"
});
Deck.belongsTo(User, {
    foreignKey: "user_id"
});

Deck.belongsToMany(Card,{
    through: Deck_Card
});
Card.belongsToMany(Deck, {
    through: Deck_Card
});



Enemy.hasMany(EnemyDeck, {
    foreignKey: 'enemy_id'
});
EnemyDeck.belongsTo(Enemy, {
    foreignKey: 'enemy_id'
});

EnemyDeck.belongsToMany(Card, {
    through: EnemyDeck_Card
});
Card.belongsToMany(EnemyDeck, {
    through: EnemyDeck_Card
});



User.hasMany(Gamestate, {
    foreignKey: 'playerId'
});
Gamestate.belongsTo(User, {
    foreignKey: 'playerId'
});

Enemy.hasMany(Gamestate, {
    foreignKey: 'enemyId'
});
Gamestate.belongsTo(Enemy, {
    foreignKey: 'enemyId'
});



module.exports = {
Card,
Deck,
Scores,
User,
Enemy,
Gamestate,
EnemyDeck,
EnemyDeck_Card,
Deck_Card
};
