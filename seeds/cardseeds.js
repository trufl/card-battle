const { Card } = require('../models');

const cardData = [
    {
    cardName: 'Santa With a Sword',
    attackStat: '100',
    defenseStat: '50',
    filename: 'card-1-done.gif',

    // filename relative to public / assets/filenames
},
{
    cardName: 'Spookey Spider',
    attackStat: '250',
    defenseStat: '0',
    filename: 'card-2-done.gif',
},
{
    cardName: 'Isaiah',
    attackStat: '100',
    defenseStat: '100',
    filename: 'card-3-done.gif',
},
{
    cardName: 'Scary Centipede',
    attackStat: '125',
    defenseStat: '25',
    filename: 'card-4-done.gif',
},
{
    cardName: 'Fly',
    attackStat: '0',
    defenseStat: '150',
    filename: 'card-5-done.gif',
},
{
    cardName: 'Kobe Bryant',
    attackStat: '150',
    defenseStat: '150',
    filename: 'card-6-done.gif',
},
{
    cardName: 'Michael Jordan in 2072',
    attackStat: '200',
    defenseStat: '200',
    filename: 'card-7-done.gif',
},
{
    cardName: 'Lil Piggy',
    attackStat: '75',
    defenseStat: '175',
    filename: 'card-8-done.gif',
},
{
    cardName: 'Teleport Guy',
    attackStat: '75',
    defenseStat: '250',
    filename: 'card-9-done.gif',
},
{
    cardName: 'Fire Breathing Pumpkin',
    attackStat: '150',
    defenseStat: '75',
    filename: 'card-10-done.gif',
},

];

const seedCards = () => Card.bulkCreate(cardData);
seedCards();
module.exports = seedCards;


