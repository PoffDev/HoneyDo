var connection = require('./connection.js');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: "Chipotle1993",
	database: 'HoneyDo'
});

//
function connectToDB(){
    connection.connect(function(err){
        if (err) {
            console.error('error connection:', err.stack);
            return
        }
        console.log('connected to MySQL DB')
    });
};

module.exports.connectToDB = connectToDB;

function addUserToDB (userObj, callback){
	connection.query('INSERT INTO members SET ?', userObj, function(err, results){
		if (err) return callback (false, err)
			callback(true. null)
	});
	
};

function findUser(email, callback){
	connection.query('SELECT * FROM members WHERE ?', {email: email}, function(err, user){
		callback (err, user)
	});
};

module.exports.findUser = findUser;