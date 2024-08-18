var express = require('express');
var router = express.Router();
const usersRoute = require('./users');
const threadsRoute = require('./threads')

router.use('/users', usersRoute);
router.use('/threads', threadsRoute);

module.exports = router;