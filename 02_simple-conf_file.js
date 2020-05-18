const fs = require('fs');
const mysql = require('mysql');
const data = fs.readFileSync('./dbconfig.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
	host: conf.host,
	user: conf.user,
	password: conf.password,
	port: conf.port,
	database: conf.database
});
connection.connect();

let sql = 'SELECT * FROM city WHERE population > 9000000;';
connection.query(sql, function (error, results, fields) {
    if (error) 
        throw error;
	for (let city of results) {
		console.log(city.Name, city.CountryCode, city.Population);
	}
});
 
connection.end();