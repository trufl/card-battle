const sequelize = require('../config/connection');
const { User } = require('../models');
const seedDecks = require('./deckSeeds');
const seedScores = require('./scoresSeed');

const userData = require('./userData.json');
const seedUsers = require('./userSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

   
    await seedUsers();
    await seedDecks();
    await seedScores();


    process.exit(0);
};

seedDatabase();
