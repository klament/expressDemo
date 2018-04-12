var express = require('express');
var router = express.Router();
var userService = require("../service/userService");
// 使用连接池，提升性能
/* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('/pages/register.html');
});
router.post('/userRegister', function(req, res) {
	var uname = req.body.username;
	userService.queryUserByUserName(uname, function(data) {
		console.log(data);
		if (data == "x") {
			userService.insertUser(req.body, function(data) {
				res.json(true);
			});
		} else {
			res.json(false);
		}
	});
});
module.exports = router;
