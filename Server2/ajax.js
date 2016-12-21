var a ='123';
var b = a;

function Person(name){
  this.name = name;
}
var p1 = new Person('Nam');
var p2 = p1;

p2.name ='Khoa';
console.log(p1);
console.log(p2);
