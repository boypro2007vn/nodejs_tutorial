var multer = require('multer');
//var upload = multer({dest:'./public/images'});

var storage =multer.diskStorage({
  destination: function(req,file,cb){
    if(file.fieldname=='avatar'){
      cb(null,'./public/images');
    }else{
      cb(null,'./public/images/news');
    }
  } ,
  filename: function(req,file,cb){
    console.log(file)
    cb(null,file.originalname);
  }
});

function fileFilter(req,file,cb){
  if(file.mimetype=="image/jpeg"){
    cb(null,true);
  }else{
    cb(new Error('Sai dinh dang file'));
  }
}

var limits ={
  fileSize: 1024*20
}

function getFileUpload(fileName){
  var upload= multer({storage:storage,fileFilter:fileFilter,limits:limits}).single(fileName);
  return upload;
}
  module.exports = {getFileUpload};
