// import models
const Scores = require("./Scores")
const Deck = require("./Deck")
const User = require("./Users")
const Card = require("./Cards")
const sequelize = require("../config/connection");


User.hasMany(Scores, {
    foreignKey: "scores_id"
})

User.hasMany(Card, {
  foreignKey: "card_id",
});

User.hasMany(Deck,{
    foreignKey: "deck_id",
})

Card.belongsToMany(User, {
    through: Deck

});

Deck.belongsToMany(User, {
    through: Card

});

Card.belongsToMany(Deck, {
    through: User

});

module.exports = {
Card,
Deck,
Scores,
User
};
