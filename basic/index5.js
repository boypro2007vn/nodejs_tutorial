
// a++;
// ++a;
// console.log(a);
var a = 1;

setTimeout(
  function(){
    console.log('Hello');
  }, 2000
)
setTimeout(
  function(){
    console.log('Xin chao');
  }, 1000
)

b(
  function(){
    a++;
  }, 1000
)

//console.log(a);

function b(c, s){
  c();
}
