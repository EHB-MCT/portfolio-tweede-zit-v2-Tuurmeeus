const express = require('express');
const apiRoute = require('./routes/api')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => `App listening on port: htttp://localhost:${port}`);