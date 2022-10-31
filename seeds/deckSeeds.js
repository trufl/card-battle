const { Deck, Card, EnemyDeck } = require("../models");

const deckData = [
  {
    user_id: 1
  },
  {
    user_id: 2
  }
];

const enemyDeckData = [{enemy_id: 1}, {enemy_id: 2}];

const cardData = [
  {
  cardName: 'Santa With a Sword',
  attackStat: '100',
  defenseStat: '50',
  filename: 'card-1-done.gif',
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

const seedDecks = async () => {
  const deck = await Deck.create(deckData[0]);
  const deck1 = await Deck.create(deckData[1]);

  const card = await Card.create(cardData[0]);
  const card1 = await Card.create(cardData[1]);
  const card2 = await Card.create(cardData[2]);
  const card3 = await Card.create(cardData[3]);
  const card4 = await Card.create(cardData[4]);
  const card5 = await Card.create(cardData[5]);
  const card6 = await Card.create(cardData[6]);
  const card7 = await Card.create(cardData[7]);
  const card8 = await Card.create(cardData[8]);
  const card9 = await Card.create(cardData[9]);
  
  await deck.addCard(card, {through: {selfGranted: false}});
  await deck.addCard(card1, {through: {selfGranted: false}});
  await deck.addCard(card2, {through: {selfGranted: false}});
  await deck.addCard(card3, {through: {selfGranted: false}});
  await deck.addCard(card4, {through: {selfGranted: false}});
  await deck1.addCard(card5, {through: {selfGranted: false}});
  await deck1.addCard(card6, {through: {selfGranted: false}});
  await deck1.addCard(card7, {through: {selfGranted: false}});
  await deck1.addCard(card8, {through: {selfGranted: false}});
  await deck1.addCard(card9, {through: {selfGranted: false}});
  
  const enemyDeck = await EnemyDeck.create(enemyDeckData[0]);
  const enemyDeck1 = await EnemyDeck.create(enemyDeckData[1]);

  await enemyDeck.addCard(card, {through: {selfGranted: false}});
  await enemyDeck.addCard(card1, {through: {selfGranted: false}});
  await enemyDeck.addCard(card2, {through: {selfGranted: false}});
  await enemyDeck.addCard(card3, {through: {selfGranted: false}});
  await enemyDeck.addCard(card4, {through: {selfGranted: false}});
  await enemyDeck1.addCard(card5, {through: {selfGranted: false}});
  await enemyDeck1.addCard(card6, {through: {selfGranted: false}});
  await enemyDeck1.addCard(card7, {through: {selfGranted: false}});
  await enemyDeck1.addCard(card8, {through: {selfGranted: false}});
  await enemyDeck1.addCard(card9, {through: {selfGranted: false}});
};

module.exports = seedDecks;