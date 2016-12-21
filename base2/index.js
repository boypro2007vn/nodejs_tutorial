var i=0;
function veso(){
  while(true){
    var y = Math.floor(Math.random() * (999 - 1)) + 1;
    if(y ==123){
      return i;
    }
    i++;
  }
}
console.log(`Ve trung giai sau ${veso()}`);
