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
    playerHealth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //will be foreign key for user deck id
    playerDeckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // foreign key for enemy id
    enemyId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    enemyHealth: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Foreign key for enemy id
    enemyDeckId: {
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