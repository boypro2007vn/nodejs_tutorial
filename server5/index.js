var express = require('express');
var app = express();
var upload = require('./controls/upload.js')('hinhsanpham');
var del = require('./controls/del.js');
var query = require('./connect.js');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
var SanPham = require('./model/SanPham.js');
var mangSanPham = [
  new SanPham('Android', 'Khoa hoc Android', '192417650','1.png'),
  new SanPham('iOS', 'Khoa hoc iOS', '193884721','2.jpg'),
  new SanPham('ReactJS', 'Khoa hoc ReactJS', '79437743','18081777_th.jpg')
];
app.listen(3000, function(){
  console.log('Server started');
});

app.get('/', (req, res) => {
  query.sqlQuery('SELECT * FROM "SanPham"',function(value){
    if(!value){
      res.send('Loi')

    }
    res.render('index_dark',{mangSanPham: value.rows})
  })
  // pool.connect((err,client,done)=>{
  //   if(err){
  //     return console.log('Loi ket noi');
  //   }
  //   client.query('SELECT * FROM "SanPham"',(err,result)=>{
  //     if(err){
  //       return console.log('Loi truy van');
  //     }
  //     res.render('index_dark',{mangSanPham: result.rows})
  //   })
  // })
})

app.get('/admin', (req, res) => res.render('add'));

app.get('/list', (req, res) => {
  query.sqlQuery('SELECT * FROM "SanPham"',function(value){
    if(!value){
      res.send('Loi')

    }
    res.render('list',{mangSanPham: value.rows})
  })
});

var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});

app.post('/xulythem', function(req, res){
  upload(req, res, err => {
    var {title, desc, idPhim} = req.body;
    var image = req.file.filename;
    query.sqlQuery(`INSERT INTO "SanPham"(title,des,link,image) values ('${title}','${desc}','${idPhim}','${image}')`,function(value){
      if(!value){
        res.send('LOi');
      }
      res.redirect('/');
    })
    // pool.connect((err,client,done)=>{
    //   if(err){
    //     console.log('LOI ket noi');
    //   }
    //   client.query(`INSERT INTO "SanPham"(title,des,link,image) values ('${title}','${desc}','${idPhim}','${image}')`,(err,result)=>{
    //     if(err){
    //       console.log('Loi insert',err);
    //     }
    //     res.redirect('/');
    //   })
    // })
  });
});

app.post('/xulyupdate', parser, function(req, res){
  var {id, title, desc, idPhim} = req.body;
  var image = req.file.filename;
  if(req.file != undefined){
    del(sp.hinh);
    sp.hinh = req.file.filename;
  }

  console.log(sp);
  res.redirect('/list');
});

app.get('/xoa/:id', (req, res) => {
  var {id} = req.params;
  query.deleteSql(id,function(value){
    if(!value){
      res.send('Loi xoa')
    }
    res.redirect('/list');
  });
});

app.get('/sua/:id', (req, res) => {
  var {id} = req.params;
  res.render('update', {id, sanPham: mangSanPham[id]});
});

app.get('/test', (req, res) => res.render('test'));
app.post('/xulyhinh', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.send('Loi ' + err);
    }else {
      res.send('Thanh cong: ' + req.file.filename);
    }
  });
});
