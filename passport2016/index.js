var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret:'gJ@KH@$',
  saveUninitialized: true,
  resave: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000,()=>console.log('Server Started'););

app.get('/',(req,res)=>{
  res.send('hello')
})
