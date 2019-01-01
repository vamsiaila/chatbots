
module.exports = {
    sample : (req,res)=>{
        req.body.queryResult.fulfillmentMessages[0].text.text[0] = "something for test";
        res.send(req.body);
    }
}