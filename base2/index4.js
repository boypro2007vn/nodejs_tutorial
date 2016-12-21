class Nguoi{
  constructor(ten,tuoi,luong){
    this.ten = ten;
    this.tuoi = tuoi;
    this.luong = luong;
  }
  get info(){
    return this.ten +" "+this.tuoi+" "+this.luong;
  }
  set info(value){
    var string = value.split(' ');
    this.ten=string[0];
    this.tuoi=string[1];
    this.luong=string[2];
  }
}
//var nguoi1 = new Nguoi('Nam',21,100)
console.log(nguoi1);
var n = Nguoi;
var nguoi1 = new n('Nam',21,100);
var nguoi2=new Nguoi.info('Tran');
console.log(nguoi2)
