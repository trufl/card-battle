const sequelize = require('../config/connection.js');
const seedDecks = require('./deckSeeds');
const seedScores = require('./scoresSeed');
const seedUsers = require('./userSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await seedUsers();
    await seedDecks();
    await seedScores();



    process.exit(0);
};

seedDatabase();