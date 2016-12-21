var session = require('express-session');
var sess= session({
  secret:'d#J%NNI@N@ODdasd',
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge:5000}  //maxAge: thời gian sống của session
})

var middle = (req,res,next)=>{
  if(req.path =='/giaodich'){
    if(req.session.daLogin){
      next();
    }else{
      res.render('/login');
    }
  }
}

module.exports = {sess,middle};
