const router = require('express').Router();
const {GET} = require('../controller/totalController');

router.get('/total', GET);

module.exports = router