const router = require('express').Router();
const test = require('../controllers/bots/test.controller');

router.post('/',(req,res)=>{
    let intent = req.body.queryResult && req.body.queryResult.intent ? req.body.queryResult.intent : '';
    let intentName = intent.displayName;
    if(intentName === 'testing') return test.sample(req,res);
    if(intentName === 'free_time') return test.freeTime(req,res);
    else res.send('invalid intent');
})

module.exports = router;