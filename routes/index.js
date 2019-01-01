const router = require('express').Router();
const bot = require('./bot');

router.use('/bot',bot);

module.exports = router;