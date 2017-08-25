var express = require('express');
var router = express.Router();
var playerController =  require('../controllers/playerController');

/* GET users listing. */
router.get('/',playerController.add_player);

module.exports = router;
