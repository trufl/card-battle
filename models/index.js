// import models
const Scores = require("./Scores")
const Deck = require("./Deck")
const User = require("./Users")
const Card = require("./Cards")
const sequelize = require("../config/connection");


User.hasMany(Scores, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User.hasMany(Card, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

User.hasMany(Deck,{

    //  creates two user ids 
    foreignKey: 'user_id',
    onDelete: "SET NULL",
});

// Card.belongsToMany(User, {
//     through: Deck

// });

Card.belongsToMany(Deck, {
    through: 'DeckCards'

});

Deck.belongsToMany(Card, {
    through: 'DeckCards'
    // foreignKey: 'card_id',
    // onDelete: 'CASCADE',
});

module.exports = {
Card,
Deck,
Scores,
User
};
