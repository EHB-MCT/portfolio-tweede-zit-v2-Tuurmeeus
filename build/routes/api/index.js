var express = require('express');
var router = express.Router();
const usersRoute = require("./users");
const questionsRoute = require('./questions');

router.use('/users', usersRoute);

router.use('/questions', questionsRoute);

module.exports = router;