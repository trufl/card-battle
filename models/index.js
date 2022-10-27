// import models
const Scores = require("./Scores")
const Deck = require("./Deck")
const User = require("./Users")
const Card = require("./Cards")
const sequelize = require("../config/connection");

Scores.belongsToMany(User, {
  foreignKey: "user_id",
});

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
    foreignKey: "user_id",

});

Deck.belongsToMany(User, {
    foreignKey: "user_id",

});

Card.belongsToMany(Deck, {
    foreignKey: "deck_id"

});

module.exports = {
Card,
Deck,
Scores,
User
};
