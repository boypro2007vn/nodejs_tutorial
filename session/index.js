var express = require('express');
var {sess,middle} = require('./session.js');
var app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('public'));
app.use(sess);
app.use(middle);

app.listen(3000,()=>console.log('Server Started'));

app.get('/',(req,res)=>{
  res.render('home');
})

app.get('/muave',(req,res)=>{
  if(req.session.daMuave){
    return res.redirect('/vaorap')
  }
  req.session.daMuave =1;
  res.send('Ban da mua ve')
})

app.get('/vaorap',(req,res)=>{
  req.session.daMuave++;
  if(req.session.daMuave){
    return res.send('welcome')
  }
  res.send('Vui long mua ve truoc')
})
