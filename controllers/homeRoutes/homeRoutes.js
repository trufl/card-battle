const router = require('express').Router();
const { User, Scores, Deck, Card, Gamestate, EnemyDeck } = require('../../models');
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
        // const allCards = await Card.findAll({raw: true});
        const cards = await Card.findAll({
           
            raw: true,
         });
        // if(userDecks.length == 0){
        //     res.status(404).render('customize', {hasDecks: false, cards});
        // }else{

        //     res.status(200).render('customize', {hasDecks: true, userDecks, cards});
        // };
        res.status(200).render('customize', {
            cards,
            logged_in:req.session.logged_in,
            userData:req.session.user_id
            


        });
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/battle', async (req, res) =>{
    try{
        let playerDeck;
        let cards;
        //The where clause in this deck.findAll needs to be replaced with some sort of parameter to indicate what deck they chose
        if(req.session.logged_in){
            if(req.session.inGame){
                const gameData = await Gamestate.findOne({
                    where:{id:req.session.gameStateId}
                });

                playerDeck = await Deck.findOne({
                    raw: true,
                    where: {user_id: gameData.playerId},
                    include: Card,
                });
                console.log(playerDeck)
                cards = await EnemyDeck.findOne({
                    raw: true,
                    where: {enemy_id: gameData.enemyId},
                    include: Card,
                });
                console.log(cards)
            }else{
                playerDeck = await Deck.findOne({
                    raw: true,
                    where: {user_id: req.session.user_id},
                    include: Card,
                });
                console.log(playerDeck)
                cards = await EnemyDeck.findOne({
                    raw: true,
                    where: {id: Math.floor(Math.random()*2)+1},
                    include: Card
                })
                console.log(cards)
            };
        }else{
            playerDeck = await Card.findAll({raw: true});
            for(j=0;j<5;j++){
                const random = Math.floor(Math.random() * 10);
                playerDeck.splice(random-j, 1);
            };
            cards = await Card.findAll({raw: true});
            for(i=0;i<5;i++){
                const random = Math.floor(Math.random() * 10);
                cards.splice(random-i, 1);
            };
        };

        req.session.save(() => {
            req.session.inGame = true;
        });

        res.render('battle', {
            cards,
            playerDeck,
            logged_in: req.session.logged_in,
            inGame : req.session.inGame
        })
    }catch(err){
        res.status(500).json(err)
    };
});

router.get('/cardstore', (req, res) =>{

});

router.get('/victory', (req, res) => {
    req.session.inGame = false;
    res.status(200).render('youwon');
});

router.get('/youlost', (req, res) => {
    req.session.inGame = false;
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

router.get('/userdeck', withAuth, async (req, res) => {
    try{
        const decks = await Deck.findAll({
            where: {user_id: req.session.user_id},
            raw: true,
            include: Card
        });
        res.status(200).render('userDeck', {decks,
            logged_in:req.session.logged_in,
            userData:req.session.user_id

            
        })
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/', (req, res) =>{
    res.status(200).render('home', {logged_in: req.session.logged_in});
});

module.exports = router;