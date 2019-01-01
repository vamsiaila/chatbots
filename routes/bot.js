const router = require('express').Router();
const test = require('../controllers/bots/test.controller');

router.post('/',(req,res)=>{
    if(req.queryResult.intent.displayName === 'testing') return test.sample;
    else res.send('invalid intent');
})

module.exports = router;