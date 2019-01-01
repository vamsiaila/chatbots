const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('api',controller);


app.listen(port,()=> console.log(`bot listening to port ${port}`));