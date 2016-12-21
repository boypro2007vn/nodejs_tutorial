class Point{
  constructor(x,y){
    this.x=x;
    this.y=y;

  }
}

class Segment{
  constructor(A,B){
    this.A=A;
    this.B=B;
    if(this.A.x ==this.B.x && this.A.y==this.B.y){
      throw new Error('2 point are the same')
    }
  }
  get distance(){
    var dx = this.A.x +this.B.y;
    var dy=this.A.y-this.B.y;
    return Math.sqrt(dx*dx + dy*dy)
  }
}
var A = new Point(0,1);
var B = new Point(0,1);

try{
  var AB = new Segment(A,B);
  console.log(AB.distance);
}
catch(e){
  console.log('Error: '+e)
}
console.log('Hello')
