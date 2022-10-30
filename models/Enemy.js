const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");


class Enemy extends Model {}

Enemy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deckId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'enemydecks',
            key: 'id',
        }
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

module.exports = Enemy;