const { Model, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/connection");


class EnemyDeck extends Model {}

EnemyDeck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      
      },
    card_1_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_2_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_3_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_4_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_5_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_6_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
    card_7_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'card',
        key: 'id',
      }

    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "card",
  },
);

module.exports = EnemyDeck;