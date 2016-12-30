var express = require('express')
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nam',
  password : '523714',
  database : 'Employee'
});
connection.connect();
app.set('view engine','ejs');
app.set('views','./views')

app.listen(3000)

app.get('/',(req,res)=>{
  res.send('hello')
})
app.get('/:id',(req,res)=>{
  var valueid = req.params.id;
  var idA = {id: valueid};
  connection.query(`SELECT * from user where ?`,idA, function(err, rows) {
    if (err) {
        return res.send('loi server')
      }
      if(!rows[0]){
        return res.send('khong tin thay thong tin')
      }
      res.send(rows[0])

  });
})
