// import models
const Scores = require("./Scores")
const Deck = require("./Deck")
const User = require("./Users")
const Card = require("./Cards")
const sequelize = require("../config/connection");

// Scores.belongsToMany(User, {
//   foreignKey: "user_id",
// });

User.hasMany(Scores, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Card, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Deck,{
    foreignKey: 'user_id',
    onDelete: "CASCADE",
});

Card.belongsToMany(User, {
    foreignKey: "user_id",

});

Deck.belongsToMany(User, {
    foreignKey: "user_id",

});

Card.belongsToMany(Deck, {
    foreignKey: "deck_id"

});

Deck.hasMany(Card, {
    foreignKey: 'card_id',
    onDelete: 'CASCADE',
});

module.exports = {
Card,
Deck,
Scores,
User
};
