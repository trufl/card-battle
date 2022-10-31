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

router.get('/customize', withAuth, async (req, res) =>{
    try{
        const userDecks = await Deck.findAll({
            raw: true,
            where: {user_id: req.session.user_id},
            include: Card
        });
        const cards = await Card.findAll({raw:true});
        if(userDecks.length == 0){
            res.status(404).render('customize', {hasDecks: false, cards});
        }else{

            res.status(200).render('customize', {hasDecks: true, userDecks, cards});
        };
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/battle', async (req, res) =>{
    try{
        let playerDeck;
        let cards = await Card.findAll({raw: true});
        for(i=0;i<5;i++){
            const random = Math.floor(Math.random() * 10);
            cards.splice(random-i, 1);
        };
        //The where clause in this deck.findAll needs to be replaced with some sort of parameter to indicate what deck they chose
        if(req.session.logged_in){
            playerDeck = await Deck.findAll({
                raw: true,
                where: {id: 1},
                include: Card,
            })
        }else{
            playerDeck = await Card.findAll({raw: true});
            for(j=0;j<5;j++){
                const random = Math.floor(Math.random() * 10);
                playerDeck.splice(random-j, 1);
            };
        };

        res.render('battle', {
            cards,
            playerDeck,
            logged_in: req.session.logged_in
        })
    }catch(err){
        res.status(500).json(err)
    };
});

router.get('/cardstore', (req, res) =>{

});

router.get('/victory', (req, res) => {
    res.status(200).render('youwon');
});

router.get('/youlost', (req, res) => {
    res.status(200).render('youdied');
});

router.get('/highscores', async (req, res) =>{
    try{
        const highScores = await Scores.findAll({include: User});
        if(highScores.length == 0){
            highScores.message = "No current high scores";
            return res.status(404).render('highscores', highScores.message);
        }
        const plainScores = highScores.map((data) => data.get({plain: true}));
        console.log(plainScores)
        res.status(200).render('highscores', { plainScores })
    }catch(err){
        res.status(500).json(err);
    };
});

router.get('/', (req, res) =>{
    res.status(200).render('home', {logged_in: req.session.logged_in});
});

module.exports = router;