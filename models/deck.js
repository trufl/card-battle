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
    user_id: {
      type: DataTypes.STRING,
      references: {
        model:'user',
        key: 'id',
      }

      },
    card_id:{
      type: DataTypes.INTEGER,

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