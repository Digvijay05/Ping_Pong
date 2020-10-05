class paddle {
  constructor() {
    //Constructs Paddle.
    this.x=0;
    this.y=200;
    this.w=15;
    this.h=70;
    this.vy=2;
  }
  update() {
    if(this.y>=height-35 ||this.y<=35)
      {
        this.vy*=-1
      }
  }
  change_dir(y) {
    this.vy=y;
  }
  move() {
    //Moves Paddle
    this.y+=this.vy
  }

  show() {
    rect(this.x,this.y,this.w,this.h)
  }
}
var p1,p2;