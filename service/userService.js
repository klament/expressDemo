var userDao = require("../dao/userDao");
var userService = {
    queryUserByUserName: function(username, callback) {
        var reg = userDao.queryUserByUserName(username, function(rows) {
            callback(rows);
        });
    },
    insertUser: function(userObj, callback) {
        var reg = userDao.insertUser(userObj, function(rows) {
            callback(rows);
        });
    }
}
module.exports = userService;
