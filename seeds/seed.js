const sequelize = require('../config/connection');
const { User } = require('../models');
const seedCards = require('./cardseeds');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await seedCards();

    process.exit(0);
};

seedDatabase();
