const router = require('express').Router();
const { User } = require('../../models');
const { Deck } = require('../../models');
const { Card } = require('../../models');
const { Scores } = require('../../models');



router.post('/', async (req, res) => {
    const decks = await Deck.findAll({
      
    })
    res.status(200)
    .json({decks});
});

router.get('/', async (req, res) => {
    const cards = await Card.findAll({
      
    })
    res.status(200)
    .json({cards});
});

// router.get('/', async (req, res) => {
//     const deckData 
// })

module.exports = router;