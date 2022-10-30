const router = require('express').Router();
const { Model } = require('sequelize');
const { User, Deck, Card, Scores } = require('../../models');
// const withAuth = require('../../utils/auth');

// const { Deck } = require('../../models');
// const { Card } = require('../../models');
// const { Scores } = require('../../models');


// /
// router.get('/cards/:id', async (req, res) => {
//     try { 
//         const cardDataBase = await Card.findByPk(req.params.id);

//         const card = cardDataBase.get({ plain: true });
        
//         res.render('cardstore', { card, loggedIn: req.session.loggedIn})
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
// });

// router.get('/', async (req, res) => {
    //     const deckData 
    // })
    
    router.get('/', async (req, res) => {
        const scores = await Scores.findAll({
          
        })
        // console.log(scores);
        res.status(200).json({ scores });
    });

    // router.get('/', async (req, res) => {
    //     const user = await User.findAll()
    //     res.status(200).json({user});
    // });

module.exports = router;