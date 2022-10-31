const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const Deck_Card = sequelize.define('Deck_Card', {
    selfGranted: DataTypes.BOOLEAN
}, { timestamps: false });

module.exports = Deck_Card;