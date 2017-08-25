var express = require('express');
var router = express.Router();
var playController =  require('../controllers/playController');

/* GET users listing. */
router.get('/',playController.index);

module.exports = router;
