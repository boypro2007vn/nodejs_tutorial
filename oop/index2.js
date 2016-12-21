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

Person.prototype.sangNamMoi = function () {
  this.age++;
};

Person.prototype.luong = 3000;

// khoa.sangNamMoi();
// khoa2.sangNamMoi();
// console.log(khoa.age);
// console.log(khoa2.age);
khoa.sa = 1000;
console.log(JSON.stringify(khoa));
console.log(khoa2.luong);
