function a(){

  var b;

  setTimeout(
    function(){
      b = 5;
    },1000
  )

  return b;
}

console.log(a());
