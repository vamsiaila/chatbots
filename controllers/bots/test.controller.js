
module.exports = {
    sample : (req,res)=>{
        const payload = {
                fulfillmentText: "Hi I am Vamsi",
            };
        res.send(payload);
    },

    freeTime : (req,res)=>{
        const payload = {};
        let query = req.body.queryResult.queryText.toLowerCase();
        if(query.indexOf('free') > -1){
            payload.fulfillmentText= "Hi I am free"
        }
        else{
            payload.fulfillmentText= "Hi I am busy"
        }
        res.send(payload)
    }
}
