var express = require('express');
var router = express.Router();
const usersRoute = require("./users");

router.use('/users', usersRoute);

module.exports = router;