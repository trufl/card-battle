const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/users', apiRoutes);

module.exports = router;