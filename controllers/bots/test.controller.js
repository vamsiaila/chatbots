
module.exports = {
    sample : (req,res)=>{
        let response = {
            messages: [{speech:'something', type:0}]
        }
        res.send(response);
    }
}