const router = require('express').Router();
const { User, Deck, Card, Gamestate } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
    try{
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userData.id;
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/newdeck', async (req,res) =>{
    try{//in the req.body must supply and object with cards having an array of objects with cardId key and value of the cards id that they want to add to their new deck
        const newDeck = await Deck.create({ user_id: req.session.user_id });
        
        const card1 = await Card.findOne({where: {id: req.body.card_1_id}});
        const card2 = await Card.findOne({where: {id: req.body.card_2_id}});
        const card3 = await Card.findOne({where: {id: req.body.card_3_id}});
        const card4 = await Card.findOne({where: {id: req.body.card_4_id}});
        const card5 = await Card.findOne({where: {id: req.body.card_5_id}});

        await newDeck.addCard(card1, {through: {selfGranted: false}});
        await newDeck.addCard(card2, {through: {selfGranted: false}});
        await newDeck.addCard(card3, {through: {selfGranted: false}});
        await newDeck.addCard(card4, {through: {selfGranted: false}});
        await newDeck.addCard(card5, {through: {selfGranted: false}});

        res.status(200).json("Created new deck with cards supplied");
    } catch(err) {
        res.status(500).json(err);
    };
});

router.get('/getgame', async (req, res) => {
    try {
        const gamestate = await Gamestate.findOne({ where: { id: req.session.gameStateId } })
        
        if(!gamestate) {
            res.status(404).json('Game not found');
        }

        res.status(200).json(gamestate);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/savegame', async (req, res) =>{
    try{

        const game = await Gamestate.create({
            playerId: req.session.user_id,
            playerHealth: req.body.player_health,
            enemyId: req.body.enemy_id,
            enemyHealth: req.body.enemy_health
        });
        req.session.save(() => {
            req.session.gameStateId = game.id;
        });
        if(!game){
            return res.status(500).json("Failed to create gamestate");
        }else{
            res.status(200).json("Created new gamestate")
        };
    }catch(err){
        res.status(500).json(err)
    }
});

router.put('/savegame', async (req,res) => {
    try{
        const game = await Gamestate.update({
            playerHealth: req.body.player_health,
            enemy_health: req.body.enemy_health
        },{
            where:{id: req.session.gameStateId}
        });
        if(game <= 0){
            return res.status(500).json("Failed to update game");
        }else{
            res.status(200).json("Created new gamestate")
        }
    }catch(err){
        res.status(500).json(err)
    };
})

module.exports = router;
