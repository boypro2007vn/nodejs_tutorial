var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlparser = bodyparser.urlencoded({extended:false});
var getUpload = require('./upload.js').getFileUpload;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

app.get('/home',(req,res)=>{
  res.render('home');
});

app.post('/xulydangtin',(req,res)=>{
  getUpload('product')(req,res,(err)=>{
    if(err){
      res.send(''+err)
    }else{
      res.send('success');
    }

  })
  // upload(req,res,(err)=>{
  //   if(err){
  //     res.send(''+err)
  //   }
  //   res.send('success')
  // })

})

app.post('/xuly',(req,res)=>{
  var upload= multer({storage:storage,fileFilter:fileFilter,limits:limits}).array('product2',5);
  upload(req,res,(err)=>{
    if(err){
      res.send(''+err);
    }else{
      res.send('success');
    }
  })
})
