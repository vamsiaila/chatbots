const router = require('express').Router();
const test = require('../controllers/bots/test.controller');

router.use('/',(req,res)=>{
    if(req.queryResult.intent.displayName === 'testing') return test.sample;
})

module.exports = router;