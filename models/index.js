// import models
const Scores = require("./scores")
const Deck = require("./deck")
const User = require("./Users")
const Card = require("./cards")
const Deck_Card = require('./deckCard')
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
})

module.exports = {
Card,
Deck,
Scores,
User
};
