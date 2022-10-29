const { Card } = require('../models');

const cardData = [
    {
    card_name: 'Santa With a Sword',
    card_id: 1,
    attackStat: '100',
    DefenseStat: '50',
    image: 'card-1-done.gif'

    // image relative to public / assets/images
},
{
    card_name: 'Spookey Spider',
    card_id: 2,
    attackStat: '250',
    DefenseStat: '0',
    image: 'card-2-done.gif'
},
{
    card_name: 'Isaiah',
    card_id: 3,
    attackStat: '100',
    DefenseStat: '100',
    image: 'card-3-done.gif'
},
{
    card_name: 'Scary Centipede',
    card_id: 4,
    attackStat: '125',
    DefenseStat: '25',
    image: 'card-4-done.gif'
},
{
    card_name: 'Fly',
    card_id: 5,
    attackStat: '0',
    DefenseStat: '150',
    image: 'card-5-done.gif'
},
{
    card_name: 'Kobe Bryant',
    card_id: 6,
    attackStat: '150',
    DefenseStat: '150',
    image: 'card-6-done.gif'
},
{
    card_name: 'Michael Jordan in 2072',
    card_id: 7,
    attackStat: '200',
    DefenseStat: '200',
    image: 'card-7-done.gif'
},
{
    card_name: 'Lil Piggy',
    card_id: 8,
    attackStat: '75',
    DefenseStat: '175',
    image: 'card-8-done.gif'
},
{
    card_name: 'Teleport Guy',
    card_id: 9,
    attackStat: '75',
    DefenseStat: '250',
    image: 'card-9-done.gif'
},
{
    card_name: 'Fire Breathing Pumpkin',
    card_id: 10,
    attackStat: '150',
    DefenseStat: '75',
    image: 'card-10-done.gif'
},

];

const seedCards = () => Card.bulkCreate(cardData);
seedCards();
module.exports = seedCards;