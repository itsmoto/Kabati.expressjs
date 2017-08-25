var connection = require('./dbconnection');
/* 
 * Package name: password-hash
 * author: davidwood 
 * */
var passwordHash = require('password-hash');
var options = {
    algorithm:"sha256",
    saltLength:25,
    iterations: 10
};
var hashedPassword = passwordHash.generate('123',options);
exports.seed = function (){
  connection.query("INSERT INTO `users`(username,password) VALUES('kazimoto','"+hashedPassword+"')"); 
  console.log('Inserted...!!!');
};

