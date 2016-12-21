function diem(x,y){
  this.x =x;
  this.y =y;
}

var diemA = new diem(1,2);
var diemB = new diem(3,4);

function length(A,B){
  var dx = diemA.x -diemB.x;
  var dy = diemA.y-diemB.y;
  return Math.sqrt(dx* dx + dy*dy);
}
//console.log(length(diemA,diemB).toPrecision(5));


function TamGiac(A,B,C){
  this.x =A;
  this.y =B;
  this.z = C;
  this.chuvi = function (){
    console.log(getCV());
  }
  var that = this;
  function getCV(){
    return length(that.x,that.y) + length(that.y,that.z) + length(that.z,that.x);
  }
}

var diem1 = new diem(1,2);
var diem2 = new diem(2,3);
var diem3 = new diem(3,4);
var diem4 = new diem(2,5);
var tg1 = new TamGiac(diem1,diem2,diem3);
var tg2 = new TamGiac(diem1,diem2,diem4);
var tg3 = new TamGiac(diem2,diem3,diem4);
var tg4 = new TamGiac(diem1,diem3,diem4);
var mangTamgiac =[tg1,tg2,tg3,tg4];
var mangfilter=mangTamgiac.filter(function(x){
  return x.chuvi() >0;
})

console.log(mangfilter);
