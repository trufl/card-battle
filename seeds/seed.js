const sequelize = require('../config/connection.js');
const { User } = require('../models');
const seedCards = require('./cardseeds');
const seedDecks = require('./deckSeeds');
const seedScores = require('./scoresSeed');

const userData = require('./userData.json');
const seedUsers = require('./userSeeds');

const seedDatabase = async () => {
    console.log("Made seed function")
    await sequelize.sync({ force: true });
    console.log("Made connection")
    
    //await seedCards();
    console.log("Seeded cards")
    await seedUsers();
    await seedDecks();
    await seedScores();



    process.exit(0);
};

seedDatabase();