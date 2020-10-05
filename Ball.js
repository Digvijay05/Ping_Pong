class Ball {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.w = 20;
    this.vx = 3;
    this.vy = 1;
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  update() {
    if(this.y >=height-10 ||this.y<=10)
    {
      this.vy*=-1;
    }
    }
  reset() {
    this.x = 200;
    this.y = 200;
    this.w = 20;
  }
  
  show(){
    ellipse(this.x, this.y, this.w)
  }
}
var ball;