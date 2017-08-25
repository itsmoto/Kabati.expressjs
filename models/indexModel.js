var connection = require('./dbconnection');
var passwordHash = require('password-hash');
var options = {
    algorithm: "sha256",
    saltLength: 25,
    iterations: 10
};

exports.login = function (data, cb) {
    connection.query("SELECT * FROM users WHERE username = '" + data.username + "'", function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            if (rows.length === 1) //number of rows, note: rows.affectedRows when(update/delete)
             {
             if (passwordHash.verify(data.password, rows[0].password)) {
                 rows.push({error:0});
                 cb(rows);   // callback function used to send to controller
            } else {
                cb([{},{error:'wrong password'}]);
            }}else {
                cb([{},{error:'wrong username/password'}]);
            }
        }
    });
};

exports.register = function (data) {
    connection.query("", function (err, result) {

    });
};

