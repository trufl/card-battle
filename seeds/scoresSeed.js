const { Scores } = require("../models");

const scoreData = [
    {
        userId: 1,
        score: 5,
    },
    {
        userId: 2,
        score: 300,
    },
];

const seedScores = () => Scores.bulkCreate(scoreData);

module.exports = seedScores;