const express = require('express');

const app = express();

app.get('/', function(req, res){
res.send('portfolio tweede zit');
});

app.listen('3000');