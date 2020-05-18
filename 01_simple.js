const mysql = require('mysql');
let connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'smart',
	password : 'factory',
	database : 'world'
});
 
connection.connect();

let sql = 'SELECT * FROM city WHERE population > 9000000;';
connection.query(sql, function (error, results, fields) {
    if (error) 
        throw error;
	console.log(results);
});
 
connection.end();