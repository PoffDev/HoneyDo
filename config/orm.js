var connection = require('./connection.js');

// object relational mapper (ORM)

//
function connectToDB(){
    connection.connect(function(err){
        if (err) {
            console.error('error connection:', err.stack);
            return
        }
        console.log('connected to MySQL DB')
    });
}
module.exports.connectToDB = connectToDB;