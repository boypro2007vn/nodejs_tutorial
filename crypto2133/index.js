var express = require('express')
var app = express();
var {addUser, viewUser,showUser,update} = require('./db.js');
var upload = require('./upload.js')('image');
var {sess, middle} = require('./session.js')
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(sess);
app.use(middle);
app.listen(3000, () => console.log('Server Started'));

app.get('/login', (req, res) => {
    if (req.session.daLogin) {
        return res.redirect('/giaodich')
    }
    res.render('login', {
        errUser: null,
        errPass: null
    });
})
app.get('/register', (req, res) => {
    res.render('register', {err: null});
})

app.post('/xulydangnhap', (req, res) => {
    var {user, pass} = req.body;
    var errUser,
        errPass = null;
    viewUser(user, pass, (result) => {
        if (result == "User") {
            errUser = 'Tai khoan khong ton tai';
        }
        if (result == "Pass") {
            errPass = 'Sai mat khau';
        }
        if (errUser == null && errPass == null) {
            req.session.daLogin = 1;
            req.session.userName = user;
            res.redirect('/giaodich');
        } else {
            res.render('login', {
                errUser: errUser,
                errPass: errPass
            });
        }
    })
})

app.get('/giaodich', (req, res) => {
    res.render('giaodich')
})

app.get('/profile',(req,res)=>{
  var user = req.session.userName;
  showUser(user, (result) => {
    res.render('profile',{result})
  })
})


app.get('/checkuser/:user', (req, res) => {
    var user = req.params.user;
    viewUser(user, null, (result) => {
        if (result == "User") {
            res.send('User')
        } else {
            res.send('Pass')
        }
    })
})

app.post('/xulydangky', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return console.log(err);
        }
        var {user, pass, phone} = req.body;
        image = req.file.filename;
        addUser(user, pass, image, phone, (err, result) => {
            if (err) {
                console.log('Loi truy van');
            } else {
                res.redirect('/login')
            }
        })
    })
})

app.post('/xulyupdate',(req,res)=>{
  upload(req, res, (err) => {
      if (err) {
          return console.log(err);
      }
      var {user,phone} = req.body;
      if(req.file){
        image = req.file.filename
      }else{
        image = req.body.baseimage
      }
      update(user, image, phone, (err, result) => {
            if (err) {
                console.log('Loi truy van');
            } else {
                res.redirect('/profile')
            }
      })
  })
})
