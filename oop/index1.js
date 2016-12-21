var nguoi = {
  ten: 'Khoa Pham',
  tuoi: 30,
  diaChi: '90 Le thi rieng'
}

// function Person(ten, tuoi, diaChi){
//   this.name = ten;
//   this.age = tuoi;
//   this.address = diaChi;
//   this.getInfo = function(){
//     console.log(this.name + ' nam nay ' + this.age + ' tuoi');
//   }
// }

function Person(ten, tuoi, diaChi){
  this.name = ten;
  this.age = tuoi;
  var address = diaChi;
  this.getInfo = getI;
  function getI(){
    console.log(this.name + ' nam nay ' + this.age + ' tuoi' +
      ' song tai dia chi ' + address
    );
  }
  this.chuyenNha = function(newAdd){
    address = newAdd;
  }
  this.getAddress = function(){
    return address;
  }
}

var khoa = new Person('Khoa Pham', 30, '90 Le Thi Rieng');
var khoa2 = new Person('Khoa2 Pham', 31, '91 Le Thi Rieng');
//console.log( JSON.stringify(khoa) );
// console.log(khoa2);
//khoa.getInfo();
//console.log(khoa.diaChi);
khoa.getInfo();
khoa.chuyenNha('92 CMT8');
khoa.getInfo();

console.log(JSON.stringify(khoa));
//console.log(khoa.getAddress());
khoa.sangNamMoi = function(){
  this.age = this.age + 1;
}
khoa.namSinh = 1987;
khoa.sangNamMoi();
console.log(khoa);
console.log(khoa2);
//console.log(nguoi);
