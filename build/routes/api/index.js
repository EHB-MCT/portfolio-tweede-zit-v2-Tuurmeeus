var express = require('express');
var router = express.Router();

const usersRoute = require('./users');
const threadsRoute = require('./threads')
const questionsRoute = require('./questions');
const commentsRoute = require('./comments');

router.use('/users', usersRoute);
router.use('/threads', threadsRoute);
router.use('/questions', questionsRoute);
router.use('/comments', commentsRoute);


module.exports = router;