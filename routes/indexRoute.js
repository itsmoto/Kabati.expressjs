var express = require('express');
var router = express.Router();
var indexController =  require('../controllers/indexController');
/* GET home page. */
router.get('/', indexController.index);
router.get('/login', indexController.index);

//POST request when submiting form
router.post('/login', indexController.login);

router.get('/logout', function(req,res,next){
    req.session.destroy(function (err){
        console.log(err);
    });
    delete res.locals.session;
    res.send('hhhhh');
});

module.exports = router;
