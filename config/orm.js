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
        //console.log('connected to MySQL DB')
    });
};

module.exports.connectToDB = connectToDB;

function addUserToDB (name1, name2, email, password, callback){
	var queryString = 'INSERT INTO members (name1, name2, email, password) VALUES (?, ?, ?, ?)';
	var vals = [name1, name2, email, password];
	connection.query(queryString, vals, function(err, results){
		if (err) return callback (false, err)
			console.log(err)
			console.log(result.insertId);
            callback(true, result.insertId);
            console.log(result);
			console.log('User Added!');
		});
	
	};

function findUser(email, callback){
	console.log('find user function, email is: ' + email)
	connection.query('SELECT * FROM members WHERE ?', {email: email}, function(err, user){
		callback (err, user)
		console.log("User found!");
		});
	};

module.exports.findUser = findUser;