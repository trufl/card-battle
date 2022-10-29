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
      },

      },
    // cardId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model:'card',
    //     key: 'id',
    //   }
    // },
    cardOne: {
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      },
      
    },
    cardTwo: {
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      },
      
    },
    cardThree: {
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      },
      
    },
    cardFour: {
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      },
      
    },
    cardFive: {
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      },
      
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