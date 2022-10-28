const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");


class Scores extends Model {}

Scores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull:false
      
      },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "scores",
  },
);

module.exports = Scores;