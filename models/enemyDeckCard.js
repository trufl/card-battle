const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const enemyDeck_Card = sequelize.define('enemyDeck_Card', {
    selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });

module.exports = enemyDeck_Card;