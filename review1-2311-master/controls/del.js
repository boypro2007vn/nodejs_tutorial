var fs =require('fs');
function del(filename){
  fs.unlink(`./public/images/background/${filename}`,err =>{
    if(arr){
      console.log('Loi '+ err);
    }
    console.log('Da xoa')
  })
}

module.exports = del;
