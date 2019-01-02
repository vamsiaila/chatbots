
module.exports = {
    sample : (req,res)=>{
        
        const payload = {
                fulfillmentText: "Hi I am Vamsi",
                payload: {
                    google: {
                        expectUserResponse: true,
                        richResponse: {
                            items: [
                                {
                                    simpleResponse: {
                                        ssml: 'hi i am vamsi',
                                    }
                                }
                            ]
                        },
                    },
                },
            };
        res.send(payload);
    }
}
