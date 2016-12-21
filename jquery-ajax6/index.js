var express = require('express');
var app = express();
var parser = require('body-parser').urlencoded({extended: false})
var {getInfo,like,allInfo,count,unlike} = require('./db.js');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, function(){
  console.log('Server started');
});

app.get('/',(req,res)=>{
  allInfo((err,result) =>{
    var info = result.rows[0];
    res.render('home3',{info})
  })
})

app.get('/api/like/:id',(req,res)=>{
  var id = req.params.id;
  like(id,nlike =>{
    res.send('' + nlike);
  })
})

app.get('/api/unlike/:id',(req,res)=>{
  var id = req.params.id;
  unlike(id,nunlike =>{
    res.send('' + nunlike);
  })
})

app.get('/api/sau/:count',(req,res)=>{
  var count = parseInt(req.params.count);
  allInfo((err,result) =>{
    var info = result.rows[count];
    if(info ==undefined){
      info =result.rows[4];
    }
    res.send(info);
  })
})

app.get('/api/truoc/:count',(req,res)=>{
  var count = parseInt(req.params.count);
  allInfo((err,result) =>{
    var info = result.rows[count];
    if(info ==undefined){
      info =result.rows[0];
    }
    res.send(info);
  })
})

// app.get('/about',(req,res)=>{
//   res.send('Nam Tran');
// })
//
// app.get('/xinchao/:msg',(req,res)=>{
//   var name = req.params.msg;
//   res.send('Xin chao '+name);
// })
//
// app.post('/hello',parser,(req,res)=>{
//   var {ten,tuoi} =req.body;
//   res.send(`Chao ban ${ten},tuoi: ${tuoi}`)
// })
