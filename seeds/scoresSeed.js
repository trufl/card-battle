const { Scores } = require("../models");

const scoreData = [
    {
        user_id: 1,
        score: 5,

    },
    {
        user_id: 2,
        score: 300,

    },
];

const seedScores = () => Scores.bulkCreate(scoreData);

module.exports = seedScores;