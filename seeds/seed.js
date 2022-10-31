const sequelize = require('../config/connection.js');
const seedDecks = require('./deckSeeds');
const seedScores = require('./scoresSeed');
const seedUsers = require('./userSeeds');
const seedEnemy = require('./seedEnemy');
const seedGameState = require('./gameStateSeed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await seedEnemy();
    await seedUsers();
    await seedDecks();
    await seedScores();
    await seedGameState();



    process.exit(0);
};

seedDatabase();