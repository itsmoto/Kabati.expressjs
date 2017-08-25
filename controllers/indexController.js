var indexModel = require('../models/indexModel');

exports.index = function (req, res) {
    if(req.session.username){
        res.redirect('/dashboard');
    }else{
    res.render('index');
    }
};

exports.login = function (req, res) {
    indexModel.login({username: req.body.username, password: req.body.password},function(rows){
        if(rows[1].error == 0){
            req.session.user_id = rows[0].user_id;
            req.session.username = rows[0].username;
            console.log('----------------------'+req.session.username);
           res.redirect('/dashboard'); 
        }else{
           res.redirect('/');  
        }
    });
    
   
};