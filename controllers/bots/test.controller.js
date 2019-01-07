
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
            payload.fulfillmentText= "I am free on Saturday and Sunday"
        }
        else{
            payload.fulfillmentText= "My working hours are/n mon-fri 10:00 - 19:00"
        }
        res.send(payload)
    }
}
