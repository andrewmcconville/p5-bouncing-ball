class Ball {
    constructor(config) {
      this.velocity = config.velocity;
      this.width = config.width;
      this.height = config.height;
      this.strokeWeight = config.strokeWeight;
      
      //if the ball has a container, use it as reference
      if(config.container) {
        this.container = config.container;
        this.position = createVector(
          (config.container.getWindowContentBounds().left + config.container.getWindowContentBounds().right) / 2,
          (config.container.getWindowContentBounds().top + config.container.getWindowContentBounds().bottom) / 2);
        this.leftBound = config.container.getWindowContentBounds().left;
        this.rightBound = config.container.getWindowContentBounds().right;
        this.topBound = config.container.getWindowContentBounds().top;
        this.bottomBound = config.container.getWindowContentBounds().bottom;
      }
      // else use the canvas as reference
      else {      
        this.container = null;
        this.position = createVector(config.xStartPosition, config.yStartPosition);
        this.leftBound = 0;
        this.rightBound = width;
        this.topBound = 0;
        this.bottomBound = height;
      }
    }
    
    drawBall() {
      fill(255);
      
      //if touch right
      if(this.position.x >= this.rightBound - (this.width / 2) - 1) {
        this.velocity.x *= -1;
        this.edgeTouch();
      }
      //if touch left
      else if(this.position.x <= this.leftBound + (this.width / 2) + 1) {
        this.velocity.x *= -1;
        this.edgeTouch();
      }
      
      //if touch bottom
      if(this.position.y >= this.bottomBound - (this.height / 2) - 1) {
        this.velocity.y *= -1;
        this.edgeTouch();
      }
      //if touch top
      else if(this.position.y <= this.topBound + (this.height / 2) + 1) {
        this.velocity.y *= -1;
        this.edgeTouch();
      }
  
      this.position = this.position.add(this.velocity);
      
      strokeWeight(this.strokeWeight);
      stroke(fillHSL.h, fillHSL.s, fillHSL.l);
      ellipse(this.position.x, this.position.y, this.width, this.height);
    }
    
    edgeTouch() {
      fill(fillHSL.h, 100, 40);
    }
  }