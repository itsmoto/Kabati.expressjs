var mysql = require('mysql');
var fs = require('fs');

//read Json file
var options = JSON.parse(fs.readFileSync('dbConfig.json','utf8'));

var connection = mysql.createConnection({
    host:    options.host,
    user:    options.user,
    password:options.password,
    database:options.database
});
connection.connect(function (err){
    if(!err){
        console.log("database connected.....");
    }else{
        console.log("Error, failed to connect.....");
    }
});

module.exports = connection;
