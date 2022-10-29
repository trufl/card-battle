const { Scores } = require("../models");

const scoreData = [
    {
        userId: 1,
        score: 5,
        date: '10/29/2022',
    },
    {
        userId: 2,
        score: 300,
        date: '10/27/2022',
    },
];

const seedScores = () => Scores.bulkCreate(scoreData);

module.exports = seedScores;