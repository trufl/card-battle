const { Enemy } = require('../models');

const enemyData = [
    {
        image: "/images/enemy/enemy1.jpg"
    },
    {
        image: "/images/enemy/enemy1.jpg"
    }
];

const seedEnemy = () => Enemy.bulkCreate(enemyData);

module.exports = seedEnemy;