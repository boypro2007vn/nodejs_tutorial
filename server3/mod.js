console.log('ababa');
function b(){
  console.log('toi la b')
}

function Person(name, age){
  this.ten =name;
  this.tuoi = age;
  this.getInfo = ()=>{
    return this.ten + this.tuoi;
  }
}
module.exports = {b:b,Person:Person};
//module.exports = {b,Person};
