const router = require('express').Router();
const test = require('../controllers/bots/test.controller');

router.post('/',(req,res)=>{
    console.log(req.body);
    let intent = req.body.queryResult && req.body.queryResult.intent ? req.body.queryResult.intent : '';
    if(intent.displayName === 'testing') return test.sample(req,res);
    else res.send('invalid intent');
})

module.exports = router;