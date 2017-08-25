var connection = require('./dbconnection');

exports.runUp = function (){
  connection.query("CREATE TABLE IF NOT EXISTS `users` ( `user_id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(30) NOT NULL , `password` VARCHAR(300) NOT NULL , PRIMARY KEY (`user_id`))");  
};
