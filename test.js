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
var hashedPassword = passwordHash.generate('password123',options);

console.log(hashedPassword);

console.log("New line: "+passwordHash.verify('password123', hashedPassword));