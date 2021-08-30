class Ball{
 constructor(x,y,r){
  let options ={
      restitution:1
  }
  this.body=Bodies.circle(x,y,r,options);
  this.r=r;
  World.add(world,this.body);
 }


 show(){
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y, this.r, this.r);
    pop();
 }
}

