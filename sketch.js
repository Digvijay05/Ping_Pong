let score1 = 0;
let score2 = 0;
function setup() {
  rectMode(CENTER)
  ball = new Ball();
  p1 = new paddle();
  p1.x=10
  p2 = new paddle();
  p2.x=390
  createCanvas(400, 400);
}
function keyPressed() {
  if(keyCode==65) {
    p1.change_dir(-2)
  }
   if(keyCode==90) {
    p1.change_dir(2)
  }


  if(keyCode==38) {
    p2.change_dir(-2)
  }
   if(keyCode==40) {
    p2.change_dir(2)
  }
}

function draw() {
  background(30);
  fill("yellow")
  line(200,0,200,height)
  textSize(10);
  text("Player 1",30,30)
  text(score1,35,15)
  text("Player 2",350,30)
  text(score2,355,15)
  p1.show()
  p2.show()
  p1.move()
  p1.update()
  p2.move()
  p2.update()
  ball.show()
  ball.move()
  ball.update()
  
  //ResetTheBall
  if(ball.x>=width)
    {
      score1++;
      ball.reset()
    }
  if(ball.x<=0)
  {
    score2++;
    ball.reset()
  }
  //CollisionUser
  
  if(ball.x>=380 && ball.y<=(p2.y+50) && ball.y>=(p2.y-50)){
    ball.vx *= -1; 
  }
  //CollisionComputer
    if(ball.x<=20 && ball.y<=(p1.y+50) && ball.y>=(p1.y-50)){
    ball.vx *= -1; 
  }
}