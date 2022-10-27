const { DefaultDeserializer } = require('v8');
const { Cards } = require('../models');

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
    card_name: 'card6',
    card_id: 6,
    attackStat: '',
    DefenseStat: '',
    image: 'card6-cardimg.jpg'
},
{
    card_name: 'card7',
    card_id: 7,
    attackStat: '',
    DefenseStat: '',
    image: 'card7-cardimg.jpg'
},
{
    card_name: 'card8',
    card_id: 8,
    attackStat: '',
    DefenseStat: '',
    image: 'card8-cardimg.jpg'
},
{
    card_name: 'card9',
    card_id: 9,
    attackStat: '',
    DefenseStat: '',
    image: 'card9-cardimg.jpg'
},
{
    card_name: 'card10',
    card_id: 10,
    attackStat: '',
    DefenseStat: '',
    image: 'card10-cardimg.jpg'
},

]