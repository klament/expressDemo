var mysql = require('mysql');
var config = require('../model/config');
var connection = mysql.createPool(config.mysql);
var userDao = {
	queryUserByUserName: function(username, callback) {
		connection.query('select * from n_user where username = ?', [username], function(err, rows, fields) {
			if (err) throw err;
			var resultJson = rows;
			console.log(resultJson.length);
			if (resultJson.length !== 0) {
				callback('y');
			} else {
				callback('x');
			}

		});
	},
	insertUser: function(user, callback) {
		connection.query('INSERT INTO n_user set ?', user, function(err, rows, fields) {
			if (err) throw err;
			callback('Insert success');
		});
	}

}

module.exports = userDao;
