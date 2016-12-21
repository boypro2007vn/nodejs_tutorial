function add(a){
  return function(b){
    return a + b;
  }
}

var c = add(5)(10);

console.log(c);
