const { User, Deck } = require("../models");

const userData =[
    {   
        // id: 'null',
        username: 'jerome',
        email: 'jeromenixon95@gmail.com',
        password: 'mypassword',
        deckId: 1,

    },

    {
        // id: 'null',
        username: 'leo',
        email:'leo@gmail.com',
        password: 'mypassword',
        deckId: 2,
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;