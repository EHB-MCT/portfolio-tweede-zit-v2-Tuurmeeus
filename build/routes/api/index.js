var express = require('express');
var router = express.Router();

const usersRoute = require('./users');
const threadsRoute = require('./threads')
const questionsRoute = require('./questions');

router.use('/users', usersRoute);
router.use('/threads', threadsRoute);

router.use('/questions', questionsRoute);

module.exports = router;