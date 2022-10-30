const sequelize = require('../config/connection');
const { User } = require('../models');
const seedCards = require('./cardseeds');
const seedDecks = require('./deckSeeds');
const seedScores = require('./scoresSeed');

const userData = require('./userData.json');
const seedUsers = require('./userSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    
    await seedCards();
    
    await seedDecks();
    await seedUsers();
    await seedScores();



    process.exit(0);
};

seedDatabase();