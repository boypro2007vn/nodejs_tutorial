var session = require('express-session');
var sess= session({
  secret:'d#J%NNI@N@ODdasd',
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge:1000*60*5}  //maxAge: thời gian sống của session
})

var middle = (req,res,next)=>{
  if(req.path =='/giaodich' || req.path =='/profile'){
    if(req.session.daLogin){
      return next();
    }else{
      return res.redirect('/login');
    }
  }
  next();
}

module.exports = {sess,middle};
