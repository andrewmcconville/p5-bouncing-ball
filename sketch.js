let testBall;
let balls = Array(60);
let windows = Array(100);
let fillHSL = {
  h: 281,
  s: 100,
  l: 40,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);

  //make background windows
  for(let i = 0; i < windows.length; i++) {
    windows[i] = new UIWindow({
      x: random(-100, width),
      y: random(-100, height),
      width: random(100, 200),
      height: random(60, 300),
      strokeWeight: 1,
      title: "xXWindow" + i + "Xx",
    });
  }

  windows = shuffleArray(windows);

  //make windows
  windows[windows.length - 2] = new UIWindow({
    x: (width / 2),
    y: 40,
    width: 200,
    height: 300,
    strokeWeight: 1,
    title: "Big Window",
  });
  
  windows[windows.length - 1] = new UIWindow({
    x: (width / 2) - 100,
    y: 230,
    width: 150,
    height: 200,
    strokeWeight: 1,
    title: "Little Window",
  });
  
  windows[windows.length - 0] = new UIWindow({
    x: (width / 2) + 30,
    y: 320,
    width: 100,
    height: 60,
    strokeWeight: 1,
    title: "Tiny Window",
  });
  
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
  for(let i = 0; i < balls.length; i++) {
    balls[i] = new Ball({
      xStartPosition: 10,
      yStartPosition: height / 2,
      velocity: p5.Vector.random2D().mult(random(0, 4)),
      diameter: random(1, 20),
      strokeWeight: 0,
      container: random() < 0.6 ? windows[windows.length - 3] : random() < 0.8 ? windows[windows.length - 2] : windows[windows.length -1],
      //container: windows[round(random(0, windows.length - 1))],
    });
    windows[windows.indexOf(balls[i].container)].contents.push(i);
  }
}

function draw() {
  background(fillHSL.h, 20, 95);
  
  //draw windows that contain balls
  windows.forEach(window => {
    window.drawWindow();
    window.contents.forEach(content => {
      balls[content].drawBall();
    });
  });
  
  //draw the foreground ball
  testBall.drawBall();
}