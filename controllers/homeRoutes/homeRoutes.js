const router = require('express').Router();
const { User, Scores, Deck, Card } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) =>{
    res.status(200).render('signup');
});

router.get('/customize', async (req, res) =>{

});

router.get('/battle', async (req, res) =>{
    try{
        let cards = await Card.findAll({raw: true});
        
        for(i=0;i<5;i++){
            const random = Math.floor(Math.random() * 5)+1;
            cards.splice(random - 1, 1);
        };
        //TODO: Get the players cards.
        res.render('battle', {
            cards,
            playerCards
        })
    }catch(err){
        res.status(500).json(err)
    };
});

router.get('/cardstore', (req, res) =>{

});

router.get('/highscores', async (req, res) =>{
    try{
        const highScores = await Scores.findAll({include: User});
        if(highScores.length == 0){
            highScores.message = "No current high scores";
            return res.status(404).render('highscores', highScores.message);
        }
        const plainScores = highScores.map((data) => data.get({plain: true}));
        res.status(200).render('highscores', { plainScores })
    }catch(err){
        res.status(500).json(err);
    };
});

router.get('/', (req, res) =>{
    res.status(200).render('home');
});

module.exports = router;