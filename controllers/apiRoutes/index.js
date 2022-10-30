const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const test = require('./test')
// router.use('/users', userRoutes);
router.use('/decks', test);
router.use('/cards', test);

router.use('/users', apiRoutes);

module.exports = router;