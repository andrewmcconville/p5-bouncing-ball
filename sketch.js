let testBall;
let balls = Array(1000);
let windows = Array(100);
let fillHSL = {
  h: 281,
  s: 100,
  l: 40,
};
let gridUnits = 4;
let myFont;

function preload() {
  //myFont = loadFont('https://fonts.gstatic.com/s/ibmplexmono/v15/-F63fjptAgt5VM-kVkqdyU8n1i8q1w.woff2');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100, 1);

  //make background windows
  for(let i = 0; i < windows.length; i++) {
    windows[i] = new UIWindow({
      position: createVector(roundToGrid(random(-100, width)), roundToGrid(random(-100, height))),
      width: roundToGrid(random(100, 200)),
      height: roundToGrid(random(60, 300)),
      strokeWeight: 1,
      title: "xXWindow" + i + "Xx",
    });
  }

  windows = shuffleArray(windows);

  //make custom foreground windows
  windows[windows.length - 2] = new UIWindow({
    position: createVector(roundToGrid(width / 2), roundToGrid(40)),
    width: roundToGrid(200),
    height: roundToGrid(300),
    strokeWeight: 1,
    title: "Big Window",
  });
  
  windows[windows.length - 1] = new UIWindow({
    position: createVector(roundToGrid((width / 2) - 100), roundToGrid(230)),
    width: roundToGrid(150),
    height: roundToGrid(200),
    strokeWeight: 1,
    title: "Little Window",
  });
  
  windows[windows.length - 0] = new UIWindow({
    position: createVector(roundToGrid((width / 2) + 30), 320),
    width: roundToGrid(100),
    height: roundToGrid(60),
    strokeWeight: 1,
    title: "Tiny Window",
  });
  
  //make test ball (the first ball)
  // testBall = new Ball({
  //   position: createVector(10, 210),
  //   velocity: createVector(1, 0),
  //   diameter: 10,
  //   strokeWeight: 1,
  // });
  
  //make a bunch of other balls for each window
  for(let i = 0; i < balls.length; i++) {
    balls[i] = new Ball({
      position: createVector(0, 0),
      velocity: p5.Vector.random2D().mult(random(0, 4)),
      diameter: random(1, 20),
      strokeWeight: 0,
      //container: random() < 0.6 ? windows[windows.length - 3] : random() < 0.8 ? windows[windows.length - 2] : windows[windows.length -1],
      container: windows[round(random(0, windows.length - 1))],
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
  //testBall.drawBall();
}