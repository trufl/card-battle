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
    enemy_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'enemy',
        key: 'id'
      }
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "enemydeck",
  },
);

module.exports = EnemyDeck;