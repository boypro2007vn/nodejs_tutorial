var date = new Date();
console.log(date.getSeconds());
setTimeout(function(){
  date = new Date();
  console.log(date.getSeconds())
},3000)
