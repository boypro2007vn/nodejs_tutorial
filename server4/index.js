var express = require('express');
var app = express();
var product = require('./model/product');
var connect = require('./control/connect')
var upload = require('./control/upload');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000,()=>{
  console.log("Server started");
});

app.get('/',(req,res)=>{
  connect('Select * from "Product"',(result)=>{
    if(!result){
      console.log('Loi truy van');
    }else{
      res.render('list',{proList:result.rows});
    }
  })
})

app.get('/test',(req,res)=>{
  res.render('test');
})
app.post('/testup',(req,res)=>{
  upload('hinh')(req,res,(err)=>{
    if(err){
      res.send(err)
    }
    res.send('success')
  })
})
app.get('/add',(req,res)=>{
  res.render('add');
})
app.post('/xulythem',(req,res)=>{
  upload('hinh')(req,res,(err)=>{
    if(err){
      return console.log(err)
    }
    var {title,des,link} = req.body;
    var image = req.file.filename;
    connect(`insert into "Product" (title,des,image,link) values ('${title}','${des}','${image}','${link}')`,(result)=>{
      if(!result){
        console.log('Loi truy van');
      }else{
        res.redirect('/');
      }
    })
  })
})

app.get('/delete/:id',(req,res)=>{
  var id = req.params.id;
  connect(`delete from "Product" where id = '${id}'`,(result)=>{
    if(!result){
      console.log('Loi truy van');
    }else{
      res.redirect('/');
    }
  })
})

app.get('/update/:index',(req,res)=>{
  var pro= proList[req.params.index];
  console.log(pro);
  res.render('update',{pro})
})
