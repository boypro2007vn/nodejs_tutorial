var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nam',
  password : '523714',
  database : 'Employee'
});

connection.connect();
var info ={id : 3,name : 1};
connection.query('SELECT * from user where ?',info, function(err, rows) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + JSON.stringify(rows));
});

connection.end();
