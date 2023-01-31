let testBall;
let balls = [];
let ballCount = 60;
let windows = [];
let windowCount = 100;
let fillHSL = {
  h: 281,
  s: 100,
  l: 40,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);
  
  //make windows
  windows[0] = new UIWindow({
    x: (width / 2),
    y: 40,
    width: 200,
    height: 300,
    strokeWeight: 1,
    title: "Big Window",
  });
  
  windows[1] = new UIWindow({
    x: (width / 2) - 100,
    y: 230,
    width: 150,
    height: 200,
    strokeWeight: 1,
    title: "Little Window",
  });
  
  windows[2] = new UIWindow({
    x: (width / 2) + 30,
    y: 320,
    width: 100,
    height: 60,
    strokeWeight: 1,
    title: "Tiny Window",
  });
  
  //make other background windows
  for(let i = 3; i < windowCount; i++) {
    windows.push(new UIWindow({
      x: random(-100, width),
      y: random(-100, height),
      width: random(100, 200),
      height: random(50, 300),
      strokeWeight: 1,
      title: "Window" + i,
    }));
  }
  
  //make test ball (the first ball)
  testBall = new Ball({
    xStartPosition: 10,
    yStartPosition: 210,
    velocity: createVector(1, 0),
    width: 10,
    height: 10,
    strokeWeight: 1,
  });
  
  //make a bunch of other balls for each window
  for(let i = 0; i < ballCount; i++) {
    let diameter = random(1, 20);
    balls.push(new Ball({
      xStartPosition: 10,
      yStartPosition: height / 2,
      velocity: p5.Vector.random2D().mult(random(0, 4)),
      width: diameter,
      height: diameter,
      strokeWeight: 0,
      container: random() < 0.6 ? windows[0] : random() < 0.8 ? windows[1] : windows[2],
    }));
  }
}

function draw() {
  background(fillHSL.h, 20, 95);
  
  //draw background windows
  for(let i = 3; i < windows.length; i++) {
    windows[i].drawWindow();
  }
  
  //draw windows that contain balls
  for(let i = 0; i < 3; i++) {  
    windows[i].drawWindow();  
    for(let j = 0; j < balls.length; j++) {
      if(balls[j].container == windows[i]) {
        balls[j].drawBall();
      }
    }
  }
  
  //draw the foreground ball
  testBall.drawBall();
}