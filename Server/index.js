var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended:false})
app.listen(3000);

app.get('/',function(request,response){
  //console.log('Co ket noi');
  response.send('Hello');
})
app.get('/about',function(request,response){
  //console.log('vao about');
  response.send('about');
})

app.get('/hello',(request,response)=>{
  response.send('<font color=red>Getting Hello</font>');
})

//gui bang post with usernam ,password
app.post('/hello',urlencodeParser,(request,response)=>{
  var u = request.body.username;
  var p = request.body.password
  response.send(`<font color=red>Username: ${u}, Password: ${p}</font>`);
})

app.get('/tintuc/:id',(req,res)=>{
  var i =req.params.id;
  res.send(`server nhan dc id = ${i}`)
})

//cau hinh EJS
app.set('view engine','ejs');
app.set('views','./views');

app.get('/home',(req,res)=>{
  res.render('home');
});

//truyen tham so cho EFS
app.get('/chitiet',(req,res)=>{
  res.render('chitiet',{hoten:'nam'});
});

app.get('/namsinh',(req,res)=>{
  res.render('namsinh',{namsinh:[1995,1996,1997,1998]});
});
