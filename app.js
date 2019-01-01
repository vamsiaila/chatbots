const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.listen(port,()=> console.log(`bot listening to port ${port}`));