var mang = [1,2,3];
console.log(Array.isArray(mang));
console.log(mang.reverse());

//Tat ca phan tu trong mang co thoa man dieu kien
var b =mang.every(function(x){
  return x >0;
})
console.log(b)

//tim 1 phan tu phu hop dieu kien
var b =mang.some(function(x){
  return x >0;
})
console.log(b)

// tao mang moi , voi function cho tung phan tu
var b =mang.map(function(x){
  return x +1;
})
console.log(b);

var mang =[8,3,4,6,5,7];
console.log(mang.sort());

function Nguoi(age,salary){
  this.tuoi=age;
  this.luong=salary;
}

var A = new Nguoi(18,5000);
var B = new Nguoi(20,2000);
var C = new Nguoi(15,3000);
var arr = [A,B,C];
arr.sort(function(a,b){
  return a.tuoi - b.tuoi;
})
console.log(arr)
