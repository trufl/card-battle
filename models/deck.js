const { Model, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/connection");


class Deck extends Model {}

Deck.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      
      },
    cards: {
        card_id: dataTypes.INTEGER,
        
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card",
  },
);

module.exports = Deck;