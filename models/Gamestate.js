const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gamestate extends Model {}

Gamestate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    playerHealth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //will be foreign key for user deck id
    playerDeckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'deck',
        key: 'id',
      }
    },
    // foreign key for enemy id
    enemyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enemy',
        key: 'id',
      }

    },
    enemyHealth: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Gamestate;