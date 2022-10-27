// import models
const sequelize = require("../config/connection");

scores.belongsToMany(User, {
  foreignKey: "user_id",
});

user.hasMany(card, {
  foreignKey: "card_id",
});

card.belongsToMany(user, {
    foreignKey: "user_id",

});

user.hasMany(deck,{
    foreignKey: "deck_id",
})

deck.belongsToMany(user, {
    foreignKey: "user_id",

});

card.belongsToMany(deck, {
    foreignKey: "deck_id"

});

module.exports = {
card,
deck,
scores,
user
};