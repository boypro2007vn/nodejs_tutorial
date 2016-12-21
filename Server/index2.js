var express = require('express');
var app = express();
var multer  = require('multer')

var storage = multer.diskStorage({
  destination :(req,file,cb)=>{
    cb(null,'./upload');
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname)
  }
})

var upload = multer({ storage:storage })

app.listen(3000,()=>{
  console.log('Connect success');
})

app.set('view engine','ejs');
app.set('views','./views');

app.get('/upload',(req,res)=>{
  res.render('form');
})

app.post('/upload',upload.single('file'),(req,res)=>{
  console.log('upload thanh cong')
  res.send('UPLOAD FILE THANH CONG')
})
