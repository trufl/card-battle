const { Model, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/connection");


class Deck extends Model {}

Deck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model:'user',
        key: 'id',
      }

      },
    card_one:{
      type: DataTypes.INTEGER,
      references: {
        model:'card',
        key: 'id',
      }
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "deck",
  },
);

module.exports = Deck;