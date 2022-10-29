const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const test = require('./test')
const signup = require('./signupRoutes');

// router.use('/users', userRoutes);
router.use('/decks', test);
router.use('/cards', test);
router.use('/users', test);
router.use('/scores', test);

router.use('/signup', signup)


router.use('/users', apiRoutes);

module.exports = router;