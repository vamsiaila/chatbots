
module.exports = {
    sample : (req,res)=>{
        console.log(req);
        res.send({speech:'something', displayText:'something', source:'testme'});
    }
}