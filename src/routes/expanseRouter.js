const router = require('express').Router();
const {GET, POST, DELETE} = require('../controller/expanseController');

router.get('/expanse', GET);
router.get('/expense/delete/:id', DELETE);
router.post('/expanse', POST);

module.exports = router