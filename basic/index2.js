//Tinh tong 1...100 ko dung for, while

// function add(n) {
//   return n == 0? 0 : n + add(n-1);
// }
//
// console.log(add(100));

// function add(a, b){
//   return a + b;
// }

function a(b){
  b();
}

function f(func){
  return func;
}

function g(){
  console.log('toi la g');
}

//a(f(g));

//a(g);

a(
  function(){
    console.log('Hello');
  }
);

function add1(n){
  return n - -1;
}

console.log(add1(10));
