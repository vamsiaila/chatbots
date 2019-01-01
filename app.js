const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/',(req,res)=> res.send('chatbot working'));
app.use('/api',routes);


app.listen(port,()=> console.log(`bot listening to port ${port}`));