const { Deck, Card } = require("../models");

const deckData = [
  {
    // userId: 1,
    cardOne: 3,
    cardTwo: 6,
    cardThree: 2,
    cardFour: 7,
    cardFive: 1,
  },
  {
    // userId: 2,
    cardOne: 8,
    cardTwo: 4,
    cardThree: 9,
    cardFour: 10,
    cardFive: 5,
  },
];

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
