// var a =require('./mod.js');
// console.log('a = '+ a);
// console.log (a);
// var p =new a.Person('nam',25);
// console.log(a.b('dad') + p.getInfo());

//var Person = require('./mod.js').Person

//var {Person,b} = require('./mod.js')

function Person(name, age){
  this.ten =name;
  this.tuoi = age;
  this.getInfo = ()=>{
    return this.ten + this.tuoi;
  }
}
var p = new Person('nam',25);
var {ten} = p
console.log(ten);
