const router = require('express').Router();
const { Model } = require('sequelize');
const { User, Deck, Card, Scores } = require('../../models');
const withAuth = require('../../utils/auth');

// const { Deck } = require('../../models');
// const { Card } = require('../../models');
// const { Scores } = require('../../models');



router.get('/', async (req, res) => {
    try { 
        const cardData = await Card.findAll({
            // include: [
            //     {
            //     Model: Card
            //     // attributes: ['filename'
            // // ]
            //     }
            // ]
        });
        res.status(200).json({cardData});
        // const cards = cardData.map((card) => card.get({ plain: true }));

        // res.render('cardstore', {
        //     cards,
        // })

    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try { 
        const cardDataBase = await Card.findByPk(req.params.id);

        const card = cardDataBase.get({ plain: true });
        
        res.render('cardstore', { card, loggedIn: req.session.loggedIn})
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});

// router.get('/', async (req, res) => {
    //     const deckData 
    // })
    
    router.post('/', async (req, res) => {
        const decks = await Deck.findAll({
          
        })
        res.status(200)
        .json({decks});
    });

module.exports = router;