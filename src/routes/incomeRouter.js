const router = require('express').Router();
const {GET, POST, DELETE} = require('../controller/incomeController');

router.get('/income', GET);
router.get('/income/delete/:id', DELETE);
router.post('/income', POST);

module.exports = router