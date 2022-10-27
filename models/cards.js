const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");


class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_name: {
      type: DataTypes.STRING,
      
      },

    attackStat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    defenseStat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    }, 
    card_image: {
        type: DataTypes.STRING,
        allowNull: false,
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

module.exports = Card;