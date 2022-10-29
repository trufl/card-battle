const { Card } = require('../models');

const cardData = [
    {
    cardName: 'Santa With a Sword',
    cardId: 1,
    attackStat: '100',
    defenseStat: '50',
    image: 'card-1-done.gif'

    // image relative to public / assets/images
},
{
    cardName: 'Spookey Spider',
    cardId: 2,
    attackStat: '250',
    defenseStat: '0',
    image: 'card-2-done.gif'
},
{
    cardName: 'Isaiah',
    cardId: 3,
    attackStat: '100',
    defenseStat: '100',
    image: 'card-3-done.gif'
},
{
    cardName: 'Scary Centipede',
    cardId: 4,
    attackStat: '125',
    defenseStat: '25',
    image: 'card-4-done.gif'
},
{
    cardName: 'Fly',
    cardId: 5,
    attackStat: '0',
    defenseStat: '150',
    image: 'card-5-done.gif'
},
{
    cardName: 'Kobe Bryant',
    cardId: 6,
    attackStat: '150',
    defenseStat: '150',
    image: 'card-6-done.gif'
},
{
    cardName: 'Michael Jordan in 2072',
    cardId: 7,
    attackStat: '200',
    defenseStat: '200',
    image: 'card-7-done.gif'
},
{
    cardName: 'Lil Piggy',
    cardId: 8,
    attackStat: '75',
    defenseStat: '175',
    image: 'card-8-done.gif'
},
{
    cardName: 'Teleport Guy',
    cardId: 9,
    attackStat: '75',
    defenseStat: '250',
    image: 'card-9-done.gif'
},
{
    cardName: 'Fire Breathing Pumpkin',
    cardId: 10,
    attackStat: '150',
    defenseStat: '75',
    image: 'card-10-done.gif'
},

];

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;