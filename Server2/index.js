var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended:false})
app.use(express.static('public'))
app.listen(3000);

//set phần mở rộng
app.set('view engine', 'ejs');
app.set('views', './views');


// app.get('/',(req,res)=>{
//   res.send(`
//     <form>
//       <input type='button' value='Ok'/>
//     </form>
//     `);
// });

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/info/:id/:username', (req, res) => {
    var id = req.params.id;
    var user = req.params.username;
    res.send(`Xin chao ${user}`);
});

app.get('/tinh/:ham/:a/:b', (req, res) => {
    var ham = req.params.ham;
    var a = req.params.a;
    var b = req.params.b;
    // switch (ham) {
    //   case 'cong' : ham = '+'
    //     break;
    //   case 'tru' : ham = '-'
    //     break
    //   case 'nhan' : ham = '*';
    //     break
    //   case 'chia' : ham = '/'
    //     break
    //   default:
    //     res.send('Error');
    // }
    // res.send(`ket qua ${a} ${ham} ${b} = ${eval(a + ham + b)}`)

    function pheptinh(a, b, ham) {
        this.a = a;
        this.b = b;
        this.ham = ham;
        var that = this;
        function tinh() {
            switch (that.ham) {
                case 'cong':
                    that.ham = that.a + that.b;
                    break;
                case 'tru':
                    that.ham = that.a - that.b;
                    break
                case 'nhan':
                    that.ham = that.a * that.b;
                    break
                case 'chia':
                    that.ham = that.a / that.b;
                    break
                default:
                    res.send('Error');
            }
            return that.ham;
        }
        this.getMessage = function() {
            return `Ket qua ${this.a} ${this.ham} ${this.b} = ${tinh()}`
        }
    }

    var pt = new pheptinh(a, b, ham);
    res.send(pt.getMessage());
})

app.get('/login',(req,res)=>{
  res.render('login',{user:null,pass:null,name:[]});
});


app.post('/xulydangnhap',urlencodeParser,(req,res)=>{
  var user = req.body.user;
  var pass = req.body.pass;
  var array =[req.body.name1,req.body.name2,req.body.name3];

  res.render('login',{user:user,pass:pass,name:array})
});

app.get('/pheptinh',(req,res)=>{
  res.render('pheptinh')
});

app.post('/xulypheptinh',urlencodeParser,(req,res)=>{
  var a = req.body.a;
  var b = req.body.b;
  var c = req.body.pt;
  var kq = eval(a+c+b);
  return res.send(kq);
})

app.get('/home2',(req,res)=>{
  res.render('home2')
})

// function video(id,name)=>{
//   this.id=id;
//   this.name=name;
// }

app.get('/video',(req,res)=>{
  res.render('video',{name:null,id:null})
})

app.post('/xulyvideo',urlencodeParser,(req,res)=>{
  var name = req.body.name;
  var id = req.body.id;
  var link = id.substring(id.indexOf('=')+1);
  res.render('video',{name:name,id:link})
})
