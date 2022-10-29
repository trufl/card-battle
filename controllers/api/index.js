const router = require('express').Router();
const userRoutes = require('./userRoutes');
const test = require('./test')
router.use('/users', userRoutes);
router.use('/decks', test);
router.use('/cards', test);

module.exports = router;