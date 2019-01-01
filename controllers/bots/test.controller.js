
module.exports = {
    sample : (req,res)=>{
        let response = {
            messages: [{speech:'something', displayText:'something', source:'testme'}]
        }
        res.send(response);
    }
}